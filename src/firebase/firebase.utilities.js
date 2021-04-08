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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {return};                                   //if user doesnot exists signout return

    const userRef = firestore.doc(`users/${userAuth.uid}`);   //getting user reference from database
    const snapShot = await userRef.get();                     //await is used as it is async

    if (!snapShot.exists) {
        const displayName = userAuth.displayName;
        const email = userAuth.email;
        const createdAt = new Date();

        try {
            await userRef.set({                                //data is retrieved with docref which is here linked in userref var
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;