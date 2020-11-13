import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBEMs_WGWUrmEMzjPdMlLNNlNb6ev7Qgk",
    authDomain: "clone-ac9eb.firebaseapp.com",
    databaseURL: "https://clone-ac9eb.firebaseio.com",
    projectId: "clone-ac9eb",
    storageBucket: "clone-ac9eb.appspot.com",
    messagingSenderId: "927046208760",
    appId: "1:927046208760:web:d2388a0d5d36a6c7bdff0d",
    measurementId: "G-JCVR70W71B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  //database intialization
  const db = firebaseApp.firestore()

  //authentication initialization
  const auth = firebase.auth()

  export { db, auth };