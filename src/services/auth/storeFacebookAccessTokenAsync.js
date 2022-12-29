import * as SecureStore from 'expo-secure-store';

const storeFacebookAccessTokenAsync = async (accessToken = '') => {
  try {
    const canStore = await SecureStore.isAvailableAsync();
    if (canStore) await SecureStore.setItemAsync('facebookAccessToken', accessToken);
  } catch (err) {
    throw err;
  }
};

export default storeFacebookAccessTokenAsync;
