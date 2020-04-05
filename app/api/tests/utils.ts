import 'mocha';
import * as firebase from 'firebase';
import { mapValues, omit, fromPairs } from 'lodash';
import { clearFirestoreData, initializeTestApp } from '@firebase/testing';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { setDb, setAuth, clearAuth } from '../index';
import { setTimesource, DEFAULT_TIMESOURCE } from '../utils';
import { ArticleId, Article, COLLECTION_ARTICLE } from '../articles';
import { UserId, COLLECTION_USER, User } from '../users';

import { use } from 'chai';
import * as chaiDatetime from 'chai-datetime';
import * as chaiAsPromised from 'chai-as-promised';
import { TopicId, COLLECTION_TOPIC } from '../topics';
import { TagId } from '../tags';
import {
  COLLECTION_CLAPPING,
  COLLECTION_USER_CLAPPING,
  ClappingData,
} from '../clapping';
use(chaiDatetime);
use(chaiAsPromised);

const PROJECT_ID = 'medium-us-test-firestore';

beforeEach(async () => {
  // Clear the database between tests
  await clearFirestoreData({ projectId: PROJECT_ID });
  await Promise.all(firebase.apps.map(app => app.delete()));
  clearAuth();
});

export function authedApp(auth: { uid: string }) {
  const app = initializeTestApp({ projectId: PROJECT_ID, auth });
  setAuth(({
    currentUser: auth,
  } as unknown) as firebase.auth.Auth);
  setDb(app.firestore());
  return app.firestore();
}

export function insertUser(
  db: FirebaseFirestore,
  user: { id: string; [key: string]: any },
) {
  const now = new Date();
  return db
    .collection(COLLECTION_USER)
    .doc(user.id)
    .set({
      createdAt: now,
      updatedAt: now,
      bookmarkedArticles: [],
      followedUsers: [],
      ...omit(user, 'id'),
    });
}

export async function getUser(
  db: FirebaseFirestore,
  uid: UserId,
): Promise<User> {
  const doc = await db
    .collection(COLLECTION_USER)
    .doc(uid)
    .get();
  return { ...ts2Date(doc.data()), id: uid } as User;
}

export async function listUserIds(
  db: FirebaseFirestore,
): Promise<Array<UserId>> {
  const snapshot = await db.collection(COLLECTION_USER).get();
  return snapshot.docs.map(doc => doc.id);
}

export function freezeTime() {
  const now = new Date();
  setTimesource(() => now);
  return {
    now,
    restore: () => setTimesource(DEFAULT_TIMESOURCE),
  };
}

export async function getArticle(
  db: FirebaseFirestore,
  articleId: ArticleId,
): Promise<Article> {
  const doc = await db
    .collection(COLLECTION_ARTICLE)
    .doc(articleId)
    .get();
  return { ...ts2Date(doc.data()), id: articleId } as Article;
}

export async function insertArticles(
  db: FirebaseFirestore,
  articles: Article[],
) {
  const collectionRef = db.collection(COLLECTION_ARTICLE);
  const batch = db.batch();
  articles.forEach(article =>
    batch.set(collectionRef.doc(article.id), omit(article, ['id'])),
  );
  return batch.commit();
}

export async function listArticleIds(
  db: FirebaseFirestore,
): Promise<Array<ArticleId>> {
  const snapshot = await db.collection(COLLECTION_ARTICLE).get();
  return snapshot.docs.map(doc => doc.id);
}

function ts2Date(obj: object | undefined) {
  if (obj) {
    return mapValues(obj, (v: any) =>
      v instanceof Object && v.toDate ? v.toDate() : v,
    );
  }
}

export function insertTopicTags(
  db: FirebaseFirestore,
  topicId: TopicId,
  tagIds: TagId[],
) {
  return db
    .collection(COLLECTION_TOPIC)
    .doc(topicId)
    .set({
      tags: tagIds,
    });
}

export async function getArticleClapping(
  db: FirebaseFirestore,
  articleId: ArticleId,
): Promise<Record<UserId, ClappingData>> {
  const snapshot = await db
    .collection(COLLECTION_CLAPPING)
    .doc(articleId)
    .collection(COLLECTION_USER_CLAPPING)
    .get();
  return fromPairs(
    snapshot.docs.map(doc => [doc.id, ts2Date(doc.data()) as ClappingData]),
  );
}

export async function listClappedArticles(
  db: FirebaseFirestore,
): Promise<Array<ArticleId>> {
  const snapshot = await db.collection(COLLECTION_CLAPPING).get();
  return snapshot.docs.map(doc => doc.id);
}
