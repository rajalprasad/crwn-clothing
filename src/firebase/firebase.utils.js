import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBPUpT0hqBPQ73v_6Zgrevh-817_o8PxTE",
    authDomain: "crwn-db-2020.firebaseapp.com",
    databaseURL: "https://crwn-db-2020.firebaseio.com",
    projectId: "crwn-db-2020",
    storageBucket: "crwn-db-2020.appspot.com",
    messagingSenderId: "1077710996958",
    appId: "1:1077710996958:web:e22bf05488bb26ceb0094f",
    measurementId: "G-PW4523WTCG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;