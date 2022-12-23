import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from './app';

// Initialize Auth Handler
const auth = getAuth(app);

// Localize Auth Handler
const setFirebaseLanguage = (language = '') => {
  if (!language || language === 'pap') auth.languageCode = null;
  else auth.languageCode = language;
};

// Google Auth Functions
const googleProvider = new GoogleAuthProvider();
const googleSignIn = () => signInWithRedirect(auth, googleProvider);

// Facebook Auth Functions
const facebookProvider = new FacebookAuthProvider();
const facebookSignIn = () => signInWithRedirect(auth, facebookProvider);

// Credential Auth Functions
const createSignInWithCredentialsAsync = (email = '', password = '') =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });
const signInWithCredentialsAsync = (email = '', password = '') =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });

// SignOut Function
const firebaseSignOut = () =>
  signOut(auth).catch((err) => {
    throw err;
  });

// Current User Information Functions
const getCurrentUserId = () => auth.currentUser && auth.currentUser.uid;
const getCurrentUserInfo = () => ({
  uid: auth.currentUser && auth.currentUser.uid,
  email: auth.currentUser && auth.currentUser.email,
  displayName: auth.currentUser && auth.currentUser.displayName,
  photoURL: auth.currentUser && auth.currentUser.photoURL,
});

export {
  auth,
  setFirebaseLanguage,
  googleSignIn,
  facebookSignIn,
  createSignInWithCredentialsAsync,
  signInWithCredentialsAsync,
  firebaseSignOut,
  getCurrentUserId,
  getCurrentUserInfo,
};
