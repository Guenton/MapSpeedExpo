import { fetchVinApiEndpoint, fetchVinApiKey } from '../../firebase/vinApi';
import axios from 'axios';

export const decodeVin = async (vin = '') => {
  try {
    const endpoint = await fetchVinApiEndpoint();
    const key = await fetchVinApiKey();

    const axiosUrl = endpoint + vin;
    const axiosConfig = {
      headers: { Authorization: `Bearer ${key}` },
    };

    console.log(`VIN Api - Decoding VIN number: ${vin}`);
    const { data } = await axios.get(axiosUrl, axiosConfig);

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
