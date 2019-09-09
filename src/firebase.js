import * as firebase from 'firebase'
// import firestore from 'firebase/firestore'

// const settings = {timestampsInSnapshots: true};
  var firebaseConfig = {
    apiKey: "AIzaSyAY-piEoQbpCD-0FKg6sGTtn3HwjziBmcg",
    authDomain: "crud-23bfd.firebaseapp.com",
    databaseURL: "https://crud-23bfd.firebaseio.com",
    projectId: "crud-23bfd",
    storageBucket: "",
    messagingSenderId: "208745345398",
    appId: "1:208745345398:web:dfe089844a6228d2"
  };
  firebase.initializeApp(firebaseConfig);

  // firebase.firestore().settings(settings);

   export const database = firebase.database().ref('/notes');
  // export default firebase;
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();