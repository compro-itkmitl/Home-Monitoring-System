import firebase from 'firebase';
require("firebase/firestore");

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAOtbJCLpszeWSJi_l9YyR8Xltp5j-IcTc',
  authDomain: 'compro-home-monitoring.firebaseapp.com',
  databaseURL: 'https://compro-home-monitoring.firebaseio.com',
  projectId: 'compro-home-monitoring',
  storageBucket: 'compro-home-monitoring.appspot.com',
  messagingSenderId: '737172287320'
};

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();