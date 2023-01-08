import AsyncStorage from '@react-native-async-storage/async-storage';

const getKeyValueAsync = async (key = '') => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err) {
    throw err;
  }
};

export default getKeyValueAsync;
