import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  signInWithEmailAndPassword,
  signInWithCredential,
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

// Email and Password Auth Functions
export const createSignInWithPasswordAsync = (email = '', password = '') =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });
export const signInWithPasswordAsync = (email = '', password = '') =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });

// Credential Auth Functions
export const signInWithGoogleIdTokenAsync = (idToken = '') => {
  const credential = GoogleAuthProvider.credential(idToken);
  return signInWithCredential(auth, credential)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });
};
export const signInWithFacebookAccessTokenAsync = (accessToken = '') => {
  const credential = facebookProvider.credential(accessToken);
  return signInWithCredential(auth, credential)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });
};

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

// Error Interpreter
export const parseFirebaseError = (err) => {
  if (err.message) return err.message;
  if (err.code) return err.code;
  if (typeof err === 'string') return err;
  else return JSON.stringify(err);
};
