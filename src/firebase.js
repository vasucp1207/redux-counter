import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const  firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8PUFi93cJtLBcZ_A1rwPRstP00jAsuVk",
  authDomain: "counter-4e929.firebaseapp.com",
  projectId: "counter-4e929",
  storageBucket: "counter-4e929.appspot.com",
  messagingSenderId: "270708345718",
  appId: "1:270708345718:web:f4283bf65c432a14d70857",
  measurementId: "G-14CBSVKB33"
});

const db = firebaseApp.firestore();
export default db