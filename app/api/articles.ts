import * as uuid from 'uuid/v4';
import { firestore } from 'firebase';
import { mapValues, isEmpty } from 'lodash';
import { getDb, getAuth } from './index';
import { UserId, COLLECTION_USER, assertLoggedIn } from './users';
import { getTime } from './utils';
import { DocumentData, DocumentSnapshot } from '@firebase/firestore-types';

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

export type Article = { id: ArticleId } & ArticleData & ArticleMeta;

export const ERROR_ARTICLE_NOT_FOUND = 'Article not found';
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

/**
 * Removes the specified article. Removing a non-existent article is a legal operation.
 */
export function remove(id: ArticleId) {
  return getDb()
    .collection(COLLECTION_ARTICLE)
    .doc(id)
    .delete();
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

    if (articleId in user.data()!.bookmarkedArticles) {
      return transaction.update(userRef, {});
    }

    transaction.update(userRef, {
      bookmarkedArticles: [...user.data()!.bookmarkedArticles, articleId],
      updatedAt: now,
    });
  });
}

export function unbookmark() {}

// User-related listing operations

export function listBookmarked() {}

export function listCommented() {}

export function listClapped() {}

// General listing operations

export function search() {}

export function listByUsers() {}

export function listByTags() {}

export function listByTopics() {}

export function listByPublications() {}

export function listHomePageRecommendations() {}

export function listPersonalRecommendations() {}

function newArticleId(): ArticleId {
  return uuid();
}

function articleToDoc(article: Partial<ArticleData & ArticleMeta>): object {
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
    }) as (ArticleData & ArticleMeta)),
  };
}
