import axios from 'axios';
import Constants from 'expo-constants';

const decodeVinWithNhtsa = async (vin = '') => {
  try {
    const nhtsaUrl = Constants.expoConfig.extra.NHTSA_URL;
    const jsonQueryParam = '?format=json';
    const axiosUrl = nhtsaUrl + vin + jsonQueryParam;

    console.log(`VIN Api (NHTSA) - Decoding VIN number: ${vin}`);
    const { data } = await axios.get(axiosUrl);

    const vehicleInfo = {
      make: data.Results[7].Value,
      model: data.Results[9].Value,
      year: data.Results[10].Value,
      class: data.Results[23].Value,
      numOfDoors: data.Results[24].Value,
      transmissionType: data.Results[49].Value,
      transmissionSpeeds: data.Results[50].Value,
      engineCylinders: data.Results[70].Value,
      engineCC: data.Results[71].Value,
      engineL: data.Results[73].Value,
      engineInfo: data.Results[86].Value,
      fuel: data.Results[77].Value,
      valveTrain: data.Results[78].Value,
    };

    return vehicleInfo;
  } catch (err) {
    throw err;
  }
};

export default decodeVinWithNhtsa;
