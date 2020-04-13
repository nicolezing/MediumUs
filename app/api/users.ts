import { firestore } from 'firebase';
import { mapValues, without } from 'lodash';
import { ArticleId } from './articles';
import { getTime } from './utils';
import { getDb, getAuth } from './index';
import { DocumentData, DocumentSnapshot } from '@firebase/firestore-types';

export const COLLECTION_USER = 'users';

export type UserId = string;

export type UserProfile = {
  name: string;
  avatar: URL;
  description?: string;
  externalLinks?: {
    personalPage?: URL;
    twitter?: URL;
    linkedIn?: URL;
    facebook?: URL;
  };
};

export enum MemberState {
  NON_MEMBER,
  MEMBER,
}

export enum AccountState {
  ACTIVE,
  DISABLED,
}

export type UserMeta = {
  accountState: AccountState;
  memberState: MemberState;
  createdAt: Date;
  updatedAt: Date;
  memberSince?: Date;
};

export type UserRelations = {
  bookmarkedArticles: Array<ArticleId>;
  followedUsers: Array<UserId>;
};

export type User = { id: UserId } & UserProfile & UserMeta & UserRelations;

export const ERROR_NOT_SIGNED_IN = 'No account signed in.';
export const ERROR_NOT_SIGNED_OUT =
  'Must sign out before performing this operation.';
export const ERROR_USER_NOT_FOUND = 'User not found.';
export const ERROR_SELF_FOLLOWING = 'Self-following is not allowed.';

export function assertLoggedIn() {
  if (!getAuth().currentUser) throw new Error(ERROR_NOT_SIGNED_IN);
  return getAuth().currentUser!.uid;
}

export function isLoggedOut() {
  return !getAuth().currentUser;
}

// Current user operations

/**
 * Signs in with email and password.
 */
export async function signIn(email: string, password: string) {
  if (!isLoggedOut()) {
    throw new Error(ERROR_NOT_SIGNED_OUT);
  }

  return getAuth().signInWithEmailAndPassword(email, password);
}

/**
 * Signs out the currently logged in user.
 */
export async function signOut() {
  return getAuth().signOut();
}

/**
 * Updates the account profile for the currently logged in user.
 */
export async function updateProfile(update: Partial<UserProfile>) {
  const uid = assertLoggedIn();
  return getDb()
    .collection(COLLECTION_USER)
    .doc(uid)
    .update(userToDoc(update));
}

/**
 * Creates a new email-password-based account. Returns the uid of the new account.
 */
export async function createAccount(
  email: string,
  password: string,
): Promise<UserId> {
  if (!isLoggedOut()) {
    throw new Error(ERROR_NOT_SIGNED_OUT);
  }

  const { user } = await getAuth().createUserWithEmailAndPassword(
    email,
    password,
  );
  const uid = user!.uid;

  const now = getTime();
  await getDb()
    .collection(COLLECTION_USER)
    .doc(uid)
    .set({
      name: email,
      accountState: AccountState.ACTIVE,
      memberState: MemberState.NON_MEMBER,
      createdAt: now,
      updatedAt: now,
      bookmarkedArticles: [],
      followedUsers: [],
    });

  return uid;
}

// General user operations

export function search() {}

export async function readProfile(uid: UserId): Promise<User> {
  const doc = await getDb()
    .collection(COLLECTION_USER)
    .doc(uid)
    .get();
  if (!doc.exists) throw new Error(ERROR_USER_NOT_FOUND);

  return userFromDoc(doc);
}

export async function follow(uidToFollow: UserId) {
  const uid = assertLoggedIn();

  if (uidToFollow == uid) {
    throw new Error(ERROR_SELF_FOLLOWING);
  }

  const userRef = getDb()
    .collection(COLLECTION_USER)
    .doc(uid);
  const now = getTime();
  return getDb().runTransaction(async transaction => {
    const user = await transaction.get(userRef);
    if (!user.exists) {
      return;
    }

    if (user.data()!.followedUsers.includes(uidToFollow)) {
      transaction.update(userRef, {});
      return;
    }

    transaction.update(userRef, {
      followedUsers: [...user.data()!.followedUsers, uidToFollow],
      updatedAt: now,
    });
  });
}

export async function unfollow(uidToUnfollow: UserId) {
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

    if (!user.data()!.followedUsers.includes(uidToUnfollow)) {
      transaction.update(userRef, {});
      return;
    }

    transaction.update(userRef, {
      followedUsers: without(user.data()!.followedUsers, uidToUnfollow),
      updatedAt: now,
    });
  });
}

export async function getFollowerCount(uid: UserId) {
  const followerDocs = await getDb()
    .collection(COLLECTION_USER)
    .where('followedUsers', 'array-contains', uid)
    .get();
  return followerDocs.docs.length;
}

export async function listFollowers(uid: UserId): Promise<Array<UserId>> {
  const followerDocs = await getDb()
    .collection(COLLECTION_USER)
    .where('followedUsers', 'array-contains', uid)
    .get();
  return followerDocs.docs.map(doc => doc.id);
}

export async function listFollowings(uid: UserId): Promise<Array<UserId>> {
  const userDoc = await getDb()
    .collection(COLLECTION_USER)
    .doc(uid)
    .get();
  if (!userDoc.exists) return [];
  return userDoc.data()!.followedUsers;
}

export function getNameAutoCompleteSuggestions() {}

function userToDoc(
  user: Partial<UserProfile & UserMeta & UserRelations>,
): object {
  return mapValues(user, (v, k) => {
    switch (k) {
      case 'avatar':
        return (v as URL).href;
      case 'externalLinks':
        return mapValues(v as object, vv => (vv as URL).href);
      default:
        return v;
    }
  });
}

function userFromDoc(doc: DocumentSnapshot<DocumentData>): User {
  const data = doc.data()!;
  if (!data.avatar) {
    data.avatar = defaultAvatar(data.name);
  }

  return {
    id: doc.id,
    ...(mapValues(data, (v, k) => {
      switch (k) {
        case 'avatar':
          return new URL(v);
        case 'externalLinks':
          return mapValues(v as object, vv => new URL(vv));
        case 'createdAt':
        case 'updatedAt':
        case 'memberSince':
          return (v as firestore.Timestamp).toDate();
        default:
          return v;
      }
    }) as (UserProfile & UserMeta & UserRelations)),
  };
}

function defaultAvatar(name: string) {
  const avatarSize = 256;
  const colours = [
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#9b59b6',
    '#34495e',
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#2c3e50',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#95a5a6',
    '#f39c12',
    '#d35400',
    '#c0392b',
    '#bdc3c7',
    '#7f8c8d',
  ];

  const nameSplit = name.split(' '),
    initials =
      nameSplit[0].charAt(0).toUpperCase() +
      (nameSplit.length > 1
        ? nameSplit[nameSplit.length - 1].charAt(0).toUpperCase()
        : '');

  const colourIndex = (initials.charCodeAt(0) - 65) % 19;

  const canvas = document.createElement('canvas');
  canvas.width = avatarSize;
  canvas.height = avatarSize;

  const context = canvas.getContext('2d')!;
  context.fillStyle = colours[colourIndex];
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = '128px Arial';
  context.textAlign = 'center';
  context.fillStyle = '#FFF';
  context.fillText(initials, avatarSize / 2, avatarSize / 1.5);

  return canvas.toDataURL();
}
