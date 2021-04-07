import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCBKL1XHsc99uMb3fk_iSZMdCfhkC4419E",
    authDomain: "bkt-clothing-db.firebaseapp.com",
    projectId: "bkt-clothing-db",
    storageBucket: "bkt-clothing-db.appspot.com",
    messagingSenderId: "584499642439",
    appId: "1:584499642439:web:f127477bbd9f68ed35f162",
    measurementId: "G-MFVRX07HH3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;