import 'mocha';
import { mapValues, omit } from 'lodash';
import { clearFirestoreData, initializeTestApp } from '@firebase/testing';
import { FirebaseFirestore } from '@firebase/firestore-types';
import { setDb, setAuth } from '../index';
import { setTimesource, DEFAULT_TIMESOURCE } from '../utils';
import { ArticleId, Article, COLLECTION_ARTICLE } from '../articles';

import { use } from 'chai';
import * as chaiDatetime from 'chai-datetime';
import * as chaiAsPromised from 'chai-as-promised';
use(chaiDatetime);
use(chaiAsPromised);

const PROJECT_ID = 'medium-us-test-firestore';

beforeEach(async () => {
  // Clear the database between tests
  await clearFirestoreData({ projectId: PROJECT_ID });
});

export function authedApp(auth: { uid: string }) {
  const app = initializeTestApp({ projectId: PROJECT_ID, auth });
  setAuth(({
    currentUser: auth ? { uid: auth.uid } : null,
  } as unknown) as firebase.auth.Auth);
  setDb(app.firestore());
  return app.firestore();
}

export function freezeTime() {
  const now = new Date();
  setTimesource(() => now);
  return {
    now,
    restore: () => setTimesource(DEFAULT_TIMESOURCE),
  };
}

function ts2Date(obj: object | undefined) {
  if (obj) {
    return mapValues(obj, (v: any) =>
      v instanceof Object && v.toDate ? v.toDate() : v,
    );
  }
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
