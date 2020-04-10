import { mapValues } from 'lodash';
import { ArticleId } from './articles';
import { assertLoggedIn, UserId } from './users';
import { getDb } from '.';
import { firestore } from 'firebase';
import { getTime } from './utils';
import { DocumentSnapshot, DocumentData } from '@firebase/firestore-types';

export const COLLECTION_CLAPPING = 'clapping';
export const COLLECTION_USER_CLAPPING = 'userClapping';

export type ClappingData = {
  lastClappedAt: Date;
  clappingNumber: number;
};

export type ArticleClapping = {
  uid: UserId;
} & ClappingData;

export type UserClapping = {
  articleId: ArticleId;
} & ClappingData;

export async function increaseForArticle(articleId: ArticleId): Promise<void> {
  const uid = assertLoggedIn();
  const now = getTime();
  return getDb()
    .collection(COLLECTION_CLAPPING)
    .doc(articleId)
    .collection(COLLECTION_USER_CLAPPING)
    .doc(uid)
    .set({
      lastClappedAt: now,
      clappingNumber: firestore.FieldValue.increment(1),
    });
}

export async function clearForArticle(articleId: ArticleId): Promise<void> {
  const uid = assertLoggedIn();
  return getDb()
    .collection(COLLECTION_CLAPPING)
    .doc(articleId)
    .collection(COLLECTION_USER_CLAPPING)
    .doc(uid)
    .delete();
}

export async function readByArticle(
  articleId: ArticleId,
): Promise<ArticleClapping[]> {
  const snapshot = await getDb()
    .collection(COLLECTION_CLAPPING)
    .doc(articleId)
    .collection(COLLECTION_USER_CLAPPING)
    .get();
  return snapshot.docs.map(doc => ({
    uid: doc.id,
    ...clappingDataFromDoc(doc.data()),
  }));
}

function clappingDataFromDoc(data: DocumentData): ClappingData {
  return {
    ...mapValues(data, (v, k) => {
      switch (k) {
        case 'lastClappedAt':
          return (v as firestore.Timestamp).toDate();
        default:
          return v;
      }
    }),
  } as ClappingData;
}
