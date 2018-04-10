import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCEWEMXHKeL7_8Qdy4zWmT3Drb7f3X4C0o',
  authDomain: 'fire-lunch-app.firebaseapp.com',
  databaseURL: 'https://fire-lunch-app.firebaseio.com',
  projectId: 'fire-lunch-app',
  storageBucket: 'fire-lunch-app.appspot.com',
  messagingSenderId: '639402721886'
};
firebase.initializeApp(config);


export default firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
