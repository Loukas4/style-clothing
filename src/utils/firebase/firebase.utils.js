import { initializeApp } from 'firebase/app';
import { getAuth, 
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider 
    } from 'firebase/auth';

import { getFirestore,
         doc,
         getDoc,
         setDoc, 
         } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCNx1C3svm3XmDnkI0uqS6-rVEw50UrGAk",
    authDomain: "style-clothing-78eb2.firebaseapp.com",
    projectId: "style-clothing-78eb2",
    storageBucket: "style-clothing-78eb2.appspot.com",
    messagingSenderId: "627546917619",
    appId: "1:627546917619:web:9a591a86b682fd85cf0586"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid);

      const userSnapshot = await getDoc(userDocRef);

      if(!userSnapshot.exists()) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await setDoc(userDocRef, {
                  displayName,
                  email,
                  createdAt
              });
          } catch (error) {
              console.log('error creating the user', error.message);
          }
      }

      return userDocRef;
  };