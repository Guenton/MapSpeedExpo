import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import { signInWithPasswordAsync } from '../../firebase/auth';

const loginBiometricAsync = async (email = '') => {
  try {
    const { success } = await LocalAuthentication.authenticateAsync();

    if (success) {
      const storedPassword = await SecureStore.getItemAsync('password');
      await signInWithPasswordAsync(email, storedPassword);
    }
  } catch (err) {
    if (err.message) throw err.message;
    else throw err;
  }
};

export default loginBiometricAsync;
