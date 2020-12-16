import   firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAbUdqjLlZDMjf4KMCfEHBHIVJMA6FlnQs",
    authDomain: "barter-system-a46ee.firebaseapp.com",
    projectId: "barter-system-a46ee",
    storageBucket: "barter-system-a46ee.appspot.com",
    messagingSenderId: "645208481578",
    appId: "1:645208481578:web:112e3261a2c4d0be770853"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();