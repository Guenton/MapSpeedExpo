import * as SecureStore from 'expo-secure-store';

const clearStoredCredentialsAsync = async () => {
  try {
    const canStore = await SecureStore.isAvailableAsync();
    if (canStore) await SecureStore.deleteItemAsync('email');
    if (canStore) await SecureStore.deleteItemAsync('password');
    if (canStore) await SecureStore.deleteItemAsync('googleIdToken');
    if (canStore) await SecureStore.deleteItemAsync('facebookAccessToken');
  } catch (err) {
    throw err;
  }
};

export default clearStoredCredentialsAsync;
