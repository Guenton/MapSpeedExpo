import axios from 'axios';
import Constants from 'expo-constants';

import { fetchAutoDevKey } from '../../firebase/vinApi';

const decodeVinWithAutoDev = async (vin = '') => {
  try {
    const autoDevUrl = Constants.expoConfig.extra.AUTO_DEV_URL;
    const key = await fetchAutoDevKey();

    const axiosUrl = autoDevUrl + vin;
    const axiosConfig = {
      headers: { Authorization: `Bearer ${key}` },
    };

    console.log(`VIN Api (auto.dev) - Decoding VIN number: ${vin}`);
    const { data } = await axios.get(axiosUrl, axiosConfig);

    if (data.status === 'NOT_FOUND') return null;

    const vehicleInfo = {
      make: data.make,
      model: data.model,
      engine: data.engine,
      transmission: data.transmission,
      drivenWheels: data.drivenWheels,
      numOfDoors: data.numOfDoors,
      categories: data.categories,
      mpg: data.mpg,
    };

    console.log(vehicleInfo);

    return vehicleInfo;
  } catch (err) {
    throw err;
  }
};

export default decodeVinWithAutoDev;
