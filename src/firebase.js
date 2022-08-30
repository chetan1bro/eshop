import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCO5VzPDwF-WFGpIufgOI_Zx8MopuSPQU",
    authDomain: "eshop-e9866.firebaseapp.com",
    projectId: "eshop-e9866",
    storageBucket: "eshop-e9866.appspot.com",
    messagingSenderId: "188572387052",
    appId: "1:188572387052:web:caab6cf30957991a8cc7c9",
    measurementId: "G-PQ9NTQKWKF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

