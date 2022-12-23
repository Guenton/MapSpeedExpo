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
export const auth = getAuth(app);

// Localize Auth Handler
export const setFirebaseLanguage = (language = '') => {
  if (!language || language === 'pap') auth.languageCode = null;
  else auth.languageCode = language;
};

// Google Auth Functions
const googleProvider = new GoogleAuthProvider();
export const googleSignIn = () => signInWithRedirect(auth, googleProvider);

// Facebook Auth Functions
const facebookProvider = new FacebookAuthProvider();
export const facebookSignIn = () => signInWithRedirect(auth, facebookProvider);

// Credential Auth Functions
export const createSignInWithCredentialsAsync = (email = '', password = '') =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });
export const signInWithCredentialsAsync = (email = '', password = '') =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });

// SignOut Function
export const firebaseSignOut = () =>
  signOut(auth).catch((err) => {
    throw err;
  });

// Current User Information Functions
export const getCurrentUserId = () => auth.currentUser && auth.currentUser.uid;
export const getCurrentUserInfo = () => ({
  uid: auth.currentUser && auth.currentUser.uid,
  email: auth.currentUser && auth.currentUser.email,
  displayName: auth.currentUser && auth.currentUser.displayName,
  photoURL: auth.currentUser && auth.currentUser.photoURL,
});
