import firebase from 'firebase';
require('firebase/firestore');

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAOtbJCLpszeWSJi_l9YyR8Xltp5j-IcTc',
  authDomain: 'compro-home-monitoring.firebaseapp.com',
  databaseURL: 'https://compro-home-monitoring.firebaseio.com',
  projectId: 'compro-home-monitoring',
  storageBucket: 'compro-home-monitoring.appspot.com',
  messagingSenderId: '737172287320'
};

firebase.initializeApp(config);

let firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

export default firebase;
export const provider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const db = firestore;
