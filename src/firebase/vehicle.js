import { db } from './app';
import { ref, onValue, get, set } from 'firebase/database';
import { getCurrentUserId } from './auth';

// Document Paths
const paths = () => ({
  vehicles: `vehicles/${getCurrentUserId()}/`,
  allvehicles: 'vehicles/',
});

// Refferences
const refs = (vin = '') => ({
  vehicles: ref(db, paths().vehicles + vin),
});

// Vehicle Model
const vehicleModel = {
  vin: '',
  make: '',
  model: '',
  year: '',
  bodyClass: '',
  numOfDoors: '',
  transmissionType: '',
  transmissionSpeeds: '',
  engineCylinders: '',
  engineCC: '',
  engineL: '',
  engineInfo: '',
  fuel: '',
  valveTrain: '',
};

export const storeVehicleByVin = (vin = null, model = vehicleModel) => {
  if (!vin) throw 'Missing VIN';
  return set(refs(vin).vehicles, model)
    .then(() => console.log('Firebase - Stored Vehicle with VIN Number: ' + vin))
    .catch((err) => {
      throw err;
    });
};

export const fetchVehicleArray = () => {
  console.log('Firebase - Fetching List of Vehicles');
  return get(refs().vehicles)
    .then((snapshot) => {
      const array = [];
      if (snapshot.hasChildren()) {
        const myVehicles = snapshot.val();
        for (const key in myVehicles) array.push(myVehicles[key]);
      }
      return array;
    })
    .catch((err) => {
      throw err;
    });
};
