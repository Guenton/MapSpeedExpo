import * as SecureStore from 'expo-secure-store';

const getStoredFacebookAccessTokenAsync = async () => {
  try {
    const facebookAccessToken = await SecureStore.getItemAsync('facebookAccessToken');
    if (!facebookAccessToken) return null;
    else return facebookAccessToken;
  } catch (err) {
    throw err;
  }
};

export default getStoredFacebookAccessTokenAsync;
