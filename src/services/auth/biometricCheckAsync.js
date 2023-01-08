import * as LocalAuthentication from 'expo-local-authentication';

const biometricCheckAsync = async () => {
  try {
    const { success } = await LocalAuthentication.authenticateAsync();

    if (success) return true;
    else return false;
  } catch (err) {
    if (err.message) throw err.message;
    else throw err;
  }
};

export default biometricCheckAsync;
