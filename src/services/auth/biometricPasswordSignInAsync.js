import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import { signInWithPasswordAsync } from '../../firebase/auth';

const biometricPasswordSignInAsync = async (password = '') => {
  try {
    const { success } = await LocalAuthentication.authenticateAsync();

    if (success) {
      const email = await SecureStore.getItemAsync('email');
      const user = await signInWithPasswordAsync(email, password);
      return user;
    }
  } catch (err) {
    if (err.message) throw err.message;
    else throw err;
  }
};

export default biometricPasswordSignInAsync;
