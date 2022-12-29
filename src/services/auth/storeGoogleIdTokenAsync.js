import * as SecureStore from 'expo-secure-store';

const storeGoogleIdTokenAsync = async (idToken = '') => {
  try {
    const canStore = await SecureStore.isAvailableAsync();
    if (canStore) await SecureStore.setItemAsync('googleIdToken', idToken);
  } catch (err) {
    throw err;
  }
};

export default storeGoogleIdTokenAsync;
