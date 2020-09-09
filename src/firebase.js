import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
// import '@firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDC3twmWOEDRI5TA3d1OBuvYU657fuMvQo',
  authDomain: 'ozone-61988.firebaseapp.com',
  databaseURL: 'https://ozone-61988.firebaseio.com',
  projectId: 'ozone-61988',
  storageBucket: 'ozone-61988.appspot.com',
  messagingSenderId: '659228422839',
  appId: '1:659228422839:web:cd0185261477677f49d332',
  measurementId: 'G-XWRLHV5Q3Y'
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const db = firebase.firestore;
export const auth = firebase.auth;
export const storage = firebase.storage;
