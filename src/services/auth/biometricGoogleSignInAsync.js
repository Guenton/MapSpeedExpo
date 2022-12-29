import * as LocalAuthentication from 'expo-local-authentication';
import { signInWithGoogleIdTokenAsync } from '../../firebase/auth';

const biometricGoogleSignInAsync = async (idToken = '') => {
  try {
    const { success } = await LocalAuthentication.authenticateAsync();

    if (success) {
      const user = await signInWithGoogleIdTokenAsync(idToken);
      return user;
    }
  } catch (err) {
    if (err.message) throw err.message;
    else throw err;
  }
};

export default biometricGoogleSignInAsync;
