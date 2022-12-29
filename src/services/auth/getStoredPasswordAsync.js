import * as SecureStore from 'expo-secure-store';

const getStoredPasswordAsync = async () => {
  try {
    const password = await SecureStore.getItemAsync('password');
    if (!password) return null;
    else return password;
  } catch (err) {
    throw err;
  }
};

export default getStoredPasswordAsync;
