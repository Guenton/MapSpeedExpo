import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
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
      console.log('Firebase - Created new Email and Password SignIn');
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });
export const signInWithPasswordAsync = (email = '', password = '') =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Firebase - Signed in with Email and Password');
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });
export const emailPasswordResetAsync = (email = '') =>
  sendPasswordResetEmail(auth, email)
    .then(() => console.log(`Firebase - Sent Password Reset to: ${email}`))
    .catch((err) => {
      throw err;
    });

// Credential Auth Functions
export const signInWithGoogleIdTokenAsync = (idToken = '') => {
  const credential = GoogleAuthProvider.credential(idToken);
  return signInWithCredential(auth, credential)
    .then((userCredential) => {
      console.log('Firebase - Signed in with Google');
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });
};
export const signInWithFacebookAccessTokenAsync = (accessToken = '') => {
  const credential = FacebookAuthProvider.credential(accessToken);
  return signInWithCredential(auth, credential)
    .then((userCredential) => {
      console.log('Firebase - Signed in with Facebook');
      return userCredential.user;
    })
    .catch((err) => {
      throw err;
    });
};

// SignOut Function
export const firebaseSignOut = () =>
  signOut(auth)
    .then(() => console.log('Firebase - Signed out'))
    .catch((err) => {
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
