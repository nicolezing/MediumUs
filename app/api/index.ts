import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseFirestore } from '@firebase/firestore-types';

const firebaseConfig = {
  apiKey: 'AIzaSyBxMKMK6XDpGW1dxRSjUYkoJ7lCMtmXrZ0',
  authDomain: 'mediumus-69aeb.firebaseapp.com',
  databaseURL: 'https://mediumus-69aeb.firebaseio.com',
  projectId: 'mediumus-69aeb',
  storageBucket: 'mediumus-69aeb.appspot.com',
  messagingSenderId: '595904368550',
  appId: '1:595904368550:web:d56889c35de5f63a0b4967',
  measurementId: 'G-EQC78GYL02',
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
  return currentAuth;
}

export function setAuth(auth: firebase.auth.Auth) {
  currentAuth = auth;
}

export default async function() {
  if (firebase.auth().currentUser) {
    return;
  }

  console.log('initializing firebase')
  firebase.initializeApp(firebaseConfig);
  setDb(firebase.firestore());
  setAuth(firebase.auth());

  await firebase.auth().signInWithEmailAndPassword('test@test.com', 'testpass');
  console.log('signed in!', firebase.auth().currentUser);
}

