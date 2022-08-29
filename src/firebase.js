import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2TsQlL0jIX2okRUqh8Kr9y6YSTozvgpM",
  authDomain: "slack-clone-51c3f.firebaseapp.com",
  projectId: "slack-clone-51c3f",
  storageBucket: "slack-clone-51c3f.appspot.com",
  messagingSenderId: "760429106854",
  appId: "1:760429106854:web:fa8252ec1a53985cb3c667",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
