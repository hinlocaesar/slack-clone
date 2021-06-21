import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKKHHWwcvy9hTROUwPJzVU6_QddyojweI",
  authDomain: "slack-clone-fdb30.firebaseapp.com",
  databaseURL: "https://slack-clone-fdb30-default-rtdb.firebaseio.com",
  projectId: "slack-clone-fdb30",
  storageBucket: "slack-clone-fdb30.appspot.com",
  messagingSenderId: "744168141956",
  appId: "1:744168141956:web:36af0a0ef642a337087ed1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
