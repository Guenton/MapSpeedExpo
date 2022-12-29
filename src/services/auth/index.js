import hasBiometricsAsync from './hasBiometricsAsync';
import biometricPasswordSignInAsync from './biometricPasswordSignInAsync';
import biometricGoogleSignInAsync from './biometricGoogleSignInAsync';
import biometricFacebookSignInAsync from './biometricFacebokSignInAsync';
import storeEmailAndPasswordAsync from './storeEmailAndPasswordAsync';
import storeGoogleIdTokenAsync from './storeGoogleIdTokenAsync';
import storeFacebookAccessTokenAsync from './storeFacebookAccessTokenAsync';
import getStoredEmailAsync from './getStoredEmailAsync';
import getStoredPasswordAsync from './getStoredPasswordAsync';
import getStoredGoogleIdTokenAsync from './getStoredGoogleIdTokenAsync';
import getStoredFacebookAccessTokenAsync from './getStoredFacebookAccessTokenAsync';
import clearStoredCredentialsAsync from './clearStoredCredentialsAsync';
import signOutAsync from './signOutAsync';

const authService = {
  hasBiometricsAsync,
  biometricPasswordSignInAsync,
  biometricGoogleSignInAsync,
  biometricFacebookSignInAsync,
  storeEmailAndPasswordAsync,
  storeGoogleIdTokenAsync,
  storeFacebookAccessTokenAsync,
  getStoredEmailAsync,
  getStoredPasswordAsync,
  getStoredGoogleIdTokenAsync,
  getStoredFacebookAccessTokenAsync,
  clearStoredCredentialsAsync,
  signOutAsync,
};

export default authService;
