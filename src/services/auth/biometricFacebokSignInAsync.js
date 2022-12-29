import * as LocalAuthentication from 'expo-local-authentication';
import { signInWithFacebookAccessTokenAsync } from '../../firebase/auth';

const biometricFacebookSignInAsync = async (accessToken = '') => {
  try {
    const { success } = await LocalAuthentication.authenticateAsync();

    if (success) {
      const user = await signInWithFacebookAccessTokenAsync(accessToken);
      return user;
    }
  } catch (err) {
    if (err.message) throw err.message;
    else throw err;
  }
};

export default biometricFacebookSignInAsync;
