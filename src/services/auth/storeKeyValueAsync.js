import AsyncStorage from '@react-native-async-storage/async-storage';

const storeKeyValueAsync = async (key = '', value = '') => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    throw err;
  }
};

export default storeKeyValueAsync;
