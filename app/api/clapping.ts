import { mapValues } from 'lodash';
import { ArticleId } from './articles';
import { assertLoggedIn, UserId } from './users';
import { getDb } from '.';
import { firestore } from 'firebase';
import { getTime, runTransaction } from './utils';
import { DocumentData } from '@firebase/firestore-types';

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

export const MAX_CLAPPING_PER_USER = 50;

/**
 * Increases clapping by one for the specified article.
 * Returns the updated clapping number from the current user.
 */
export async function increaseForArticle(
  articleId: ArticleId,
): Promise<number> {
  const uid = assertLoggedIn();
  const now = getTime();
  const docRef = getDb()
    .collection(COLLECTION_CLAPPING)
    .doc(articleId)
    .collection(COLLECTION_USER_CLAPPING)
    .doc(uid);

  return runTransaction(async (txn, abort) => {
    const doc = await txn.get(docRef);

    if (!doc.exists) {
      txn.set(docRef, {
        lastClappedAt: now,
        clappingNumber: 1,
      });
      return 1;
    }

    const currentClappingNumber = doc.data()!['clappingNumber'] || 0;
    if (currentClappingNumber >= MAX_CLAPPING_PER_USER) {
      return abort(currentClappingNumber);
    }

    txn.update(docRef, {
      lastClappedAt: now,
      clappingNumber: currentClappingNumber + 1,
    });
    return currentClappingNumber + 1;
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
