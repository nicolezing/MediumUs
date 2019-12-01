import firebase from 'firebase/app';
import 'firebase/auth';

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

firebase.initializeApp(firebaseConfig);

export default async function() {
  if (firebase.auth().currentUser) {
    return;
  }

  await firebase.auth().signInWithEmailAndPassword('test@test.com', 'testpass');
  console.log('signed in!', firebase.auth().currentUser);
}
