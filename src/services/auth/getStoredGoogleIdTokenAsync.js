import * as SecureStore from 'expo-secure-store';

const getStoredGoogleIdTokenAsync = async () => {
  try {
    const googleIdToken = await SecureStore.getItemAsync('googleIdToken');
    if (!googleIdToken) return null;
    else return googleIdToken;
  } catch (err) {
    throw err;
  }
};

export default getStoredGoogleIdTokenAsync;
