import { ArticleId } from './articles';
import { assertLoggedIn, UserId } from './users';
import { getDb } from '.';
import { firestore } from 'firebase';
import { getTime } from './utils';

export const COLLECTION_CLAPPING = 'clapping';
export const COLLECTION_USER_CLAPPING = 'userClapping';

export type ClappingData = {
  lastClappedAt: Date;
  clappingNumber: number;
};

export type Clapping = {
  id: ArticleId;
  userClapping: Record<UserId, ClappingData>;
};

export async function increaseForArticle(articleId: ArticleId) {
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

export function clearForArticle() {}

export function readByArticle() {}

export function readByUser() {}
