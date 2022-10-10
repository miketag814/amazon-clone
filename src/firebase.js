// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Config code for google firebase to link local project to firbase project
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCVvh0RuZZdGdx7ms-1tI2hU1ZWgghc-RI",
    authDomain: "clone-bb199.firebaseapp.com",
    projectId: "clone-bb199",
    storageBucket: "clone-bb199.appspot.com",
    messagingSenderId: "660568667017",
    appId: "1:660568667017:web:20d6e0c5b8f85a8f2e6758",
    measurementId: "G-DSE9930LNT"
};

const firebaseAapp = firebase.initializeApp(firebaseConfig);

const db = firebaseAapp.firestore();
const auth = firebase.auth();

export { db, auth};
