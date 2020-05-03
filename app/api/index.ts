import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseFirestore } from '@firebase/firestore-types';

const firebaseConfigProd = {
  apiKey: 'AIzaSyBxMKMK6XDpGW1dxRSjUYkoJ7lCMtmXrZ0',
  authDomain: 'mediumus-69aeb.firebaseapp.com',
  databaseURL: 'https://mediumus-69aeb.firebaseio.com',
  projectId: 'mediumus-69aeb',
  storageBucket: 'mediumus-69aeb.appspot.com',
  messagingSenderId: '595904368550',
  appId: '1:595904368550:web:d56889c35de5f63a0b4967',
  measurementId: 'G-EQC78GYL02',
};

const firebaseConfigDev = {
  apiKey: 'AIzaSyA5kYrW_tjs8bv0bfp6bDMLCBoInii7a10',
  authDomain: 'mediumus-dev.firebaseapp.com',
  databaseURL: 'https://mediumus-dev.firebaseio.com',
  projectId: 'mediumus-dev',
  storageBucket: 'mediumus-dev.appspot.com',
  messagingSenderId: '378238542367',
  appId: '1:378238542367:web:85aa94235f0b267e6f2b2a',
};

let currentDb: FirebaseFirestore;
export function getDb(): FirebaseFirestore {
  return currentDb;
}

export function setDb(db: FirebaseFirestore) {
  currentDb = db;
}

let currentAuth: firebase.auth.Auth;
export function getAuth(): firebase.auth.Auth {
  return currentAuth!;
}

export function setAuth(auth: firebase.auth.Auth) {
  currentAuth = auth;
}

export function clearAuth() {
  currentAuth = { currentUser: null } as firebase.auth.Auth;
}

let initialized = false;
export default async function() {
  if (initialized) {
    return;
  }

  console.log('initializing firebase');
  firebase.initializeApp(
    process.env.NODE_ENV === 'test' ? firebaseConfigDev : firebaseConfigProd,
  );
  setDb(firebase.firestore());
  setAuth(firebase.auth());
  initialized = true;
}
