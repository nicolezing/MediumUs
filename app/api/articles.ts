import * as uuid from 'uuid/v4';
import { firestore } from 'firebase';
import {
  mapValues,
  isEmpty,
  without,
  intersection,
  union,
  isEqual,
} from 'lodash';
import { getDb } from './index';
import { UserId, COLLECTION_USER, assertLoggedIn } from './users';
import { getTime } from './utils';
import { DocumentData, DocumentSnapshot } from '@firebase/firestore-types';
import { TagId } from './tags';
import { TopicId, COLLECTION_TOPIC } from './topics';

export const COLLECTION_ARTICLE = 'articles';

// The unique identifier of an article.
export type ArticleId = string;

export enum ArticleState {
  DRAFT,
  PUBLISHED,
}

export type ArticleData = {
  title: string;
  subtitle?: string;
  content: string;
  cover?: URL; // The URL of the cover photo of the article.
};

export type ArticleMeta = {
  author: UserId;
  state: ArticleState;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
};

export type ArticleRelations = {
  tags: TagId[];
};

export type Article = { id: ArticleId } & ArticleData &
  ArticleMeta &
  ArticleRelations;

export const ERROR_ARTICLE_NOT_FOUND = 'Article not found';
export const ERROR_EDITING_CONFLICT =
  'Cannot add and remove the same entity in one operation';
// Draft operations

/**
 * Creates a new article draft for the current user.
 * Returns the ID of the newly created article draft.
 */
export async function createDraft(request: ArticleData): Promise<ArticleId> {
  const uid = assertLoggedIn();
  const articleId = newArticleId();
  const now = getTime();
  await getDb()
    .collection(COLLECTION_ARTICLE)
    .doc(articleId)
    .set(
      articleToDoc({
        ...request,
        author: uid,
        createdAt: now,
        updatedAt: now,
        state: ArticleState.DRAFT,
        tags: [],
      }),
    );
  return articleId;
}

/**
 * Returns IDs of all article drafts for the current user.
 */
export async function listUserDrafts(): Promise<Array<ArticleId>> {
  const uid = assertLoggedIn();
  const collectionSnapshot = await getDb()
    .collection(COLLECTION_ARTICLE)
    .where('author', '==', uid)
    .where('state', '==', ArticleState.DRAFT)
    .get();
  return collectionSnapshot.docs.map(doc => doc.id);
}

/**
 * Publishes an article draft. Fails if the specified article is not found.
 */
export function publishDraft(id: ArticleId) {
  const docRef = getDb()
    .collection(COLLECTION_ARTICLE)
    .doc(id);
  const now = getTime();
  return getDb().runTransaction(async transaction => {
    const doc = await transaction.get(docRef);
    if (!doc.exists) throw ERROR_ARTICLE_NOT_FOUND;
    if (doc.data()!.state === ArticleState.PUBLISHED) {
      return transaction.update(docRef, {});
    }

    transaction.update(docRef, {
      state: ArticleState.PUBLISHED,
      updatedAt: now,
      publishedAt: now,
    });
  });
}

// Single article operations

/**
 * Returns the full Article doc for the given ArticleId.
 */
export async function read(id: ArticleId): Promise<Article> {
  return articleFromDoc(
    await getDb()
      .collection(COLLECTION_ARTICLE)
      .doc(id)
      .get(),
  );
}

/**
 * Updates ArticleData fields of the specified article.
 */
export async function update(id: ArticleId, update: Partial<ArticleData>) {
  if (isEmpty(update)) return;

  const docRef = getDb()
    .collection(COLLECTION_ARTICLE)
    .doc(id);
  const now = getTime();
  return getDb().runTransaction(async transaction => {
    const doc = await transaction.get(docRef);
    if (!doc.exists) throw ERROR_ARTICLE_NOT_FOUND;

    transaction.update(docRef, { ...articleToDoc(update), updatedAt: now });
  });
}

/**
 * Unpublishes an article. Fails if the specified article is not found.
 */
export async function unpublish(id: ArticleId) {
  const docRef = getDb()
    .collection(COLLECTION_ARTICLE)
    .doc(id);
  const now = getTime();
  return getDb().runTransaction(async transaction => {
    const doc = await transaction.get(docRef);
    if (!doc.exists) throw ERROR_ARTICLE_NOT_FOUND;
    if (doc.data()!.state === ArticleState.DRAFT) {
      return transaction.update(docRef, {});
    }

    transaction.update(docRef, {
      state: ArticleState.DRAFT,
      updatedAt: now,
    });
  });
}

export async function editTags(
  articleId: ArticleId,
  tagsToAdd: TagId[],
  tagsToRemove: TagId[],
) {
  if (intersection(tagsToAdd, tagsToRemove).length > 0) {
    throw ERROR_EDITING_CONFLICT;
  }

  const docRef = getDb()
    .collection(COLLECTION_ARTICLE)
    .doc(articleId);

  const now = getTime();
  return getDb().runTransaction(async transaction => {
    const doc = await transaction.get(docRef);
    if (!doc.exists) {
      return;
    }

    const newTags = union(
      without(doc.data()!.tags, ...tagsToRemove),
      tagsToAdd,
    );
    if (isEqual(newTags, doc.data()!.tags)) {
      transaction.update(docRef, {});
      return;
    }

    transaction.update(docRef, {
      tags: newTags,
      updatedAt: now,
    });
  });
}

/**
 * Removes the specified article. Removing a non-existent article is a legal operation.
 */
export async function remove(id: ArticleId) {
  const docRef = getDb()
    .collection(COLLECTION_ARTICLE)
    .doc(id);
  const bookmarkingUsers = await getDb()
    .collection(COLLECTION_USER)
    .where('bookmarkedArticles', 'array-contains', id)
    .get();
  const userRefs = bookmarkingUsers.docs.map(user =>
    getDb()
      .collection(COLLECTION_USER)
      .doc(user.id),
  );

  const now = getTime();
  return getDb().runTransaction(async transaction => {
    transaction.delete(docRef);
    // TODO: clean up bookmarks added between user-listing and this transaction.
    userRefs.forEach(userRef =>
      transaction.update(userRef, {
        bookmarkedArticles: firestore.FieldValue.arrayRemove(id),
        updatedAt: now,
      }),
    );
  });
}

export function bookmark(articleId: ArticleId) {
  const uid = assertLoggedIn();
  const userRef = getDb()
    .collection(COLLECTION_USER)
    .doc(uid);
  const articleRef = getDb()
    .collection(COLLECTION_ARTICLE)
    .doc(articleId);

  const now = getTime();
  return getDb().runTransaction(async transaction => {
    const article = await transaction.get(articleRef);
    const user = await transaction.get(userRef);

    if (article.exists) {
      transaction.update(articleRef, {});
    }

    if (!user.exists) {
      return;
    }

    if (user.data()!.bookmarkedArticles.includes(articleId)) {
      return transaction.update(userRef, {});
    }

    transaction.update(userRef, {
      bookmarkedArticles: [...user.data()!.bookmarkedArticles, articleId],
      updatedAt: now,
    });
  });
}

export function unbookmark(articleId: ArticleId) {
  const uid = assertLoggedIn();
  const userRef = getDb()
    .collection(COLLECTION_USER)
    .doc(uid);

  const now = getTime();
  return getDb().runTransaction(async transaction => {
    const user = await transaction.get(userRef);

    if (!user.exists) {
      return;
    }

    if (!user.data()!.bookmarkedArticles.includes(articleId)) {
      return transaction.update(userRef, {});
    }

    transaction.update(userRef, {
      bookmarkedArticles: without(user.data()!.bookmarkedArticles, articleId),
      updatedAt: now,
    });
  });
}

// User-related listing operations

export async function listBookmarked(uid: UserId): Promise<Array<ArticleId>> {
  const user = await getDb()
    .collection(COLLECTION_USER)
    .doc(uid)
    .get();
  if (!user.exists) return [];
  return user.data()!.bookmarkedArticles;
}

export function listCommented() {}

export function listClapped() {}

// General listing operations

export function search() {}

export async function listByAuthor(uid: UserId): Promise<Array<ArticleId>> {
  const articleRefs = await getDb()
    .collection(COLLECTION_ARTICLE)
    .where('author', '==', uid)
    .get();
  return articleRefs.docs.map(doc => doc.id);
}

export async function listByTag(tag: TagId): Promise<ArticleId[]> {
  const articleDocs = await getDb()
    .collection(COLLECTION_ARTICLE)
    .where('tags', 'array-contains', tag)
    .get();
  return articleDocs.docs.map(doc => doc.id);
}

export async function listByTopic(topicId: TopicId): Promise<ArticleId[]> {
  const topicDoc = await getDb()
    .collection(COLLECTION_TOPIC)
    .doc(topicId)
    .get();
  if (!topicDoc.exists) return [];

  const topicTagIds = topicDoc.data()!.tags;
  if (isEmpty(topicTagIds)) return [];

  const articleDocs = await getDb()
    .collection(COLLECTION_ARTICLE)
    .where('tags', 'array-contains-any', topicTagIds)
    .get();
  return articleDocs.docs.map(doc => doc.id);
}

export function listByPublication() {}

export function listHomePageRecommendations() {}

export function listPersonalRecommendations() {}

function newArticleId(): ArticleId {
  return uuid();
}

function articleToDoc(
  article: Partial<ArticleData & ArticleMeta & ArticleRelations>,
): object {
  return mapValues(article, (v, k) => {
    switch (k) {
      case 'cover':
        return (v as URL).href;
      default:
        return v;
    }
  });
}

function articleFromDoc(doc: DocumentSnapshot<DocumentData>): Article {
  const data = doc.data();
  return {
    id: doc.id,
    ...(mapValues(data, (v, k) => {
      switch (k) {
        case 'cover':
          return new URL(v);
        case 'createdAt':
        case 'updatedAt':
        case 'publishedAt':
          return (v as firestore.Timestamp).toDate();
        default:
          return v;
      }
    }) as (ArticleData & ArticleMeta & ArticleRelations)),
  };
}
