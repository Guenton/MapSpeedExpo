import * as SecureStore from 'expo-secure-store';

const getStoredEmailAsync = async () => {
  try {
    const email = await SecureStore.getItemAsync('email');
    if (!email) return null;
    else return email;
  } catch (err) {
    throw err;
  }
};

export default getStoredEmailAsync;
