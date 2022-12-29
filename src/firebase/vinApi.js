import { db } from './app';
import { ref, onValue, get } from 'firebase/database';

// Document Paths
const paths = () => ({
  vinApi: 'vinApi/',
});

// Refferences
const refs = () => ({
  endpoint: ref(db, paths().vinApi + 'endpoint'),
  key: ref(db, paths().vinApi + 'key'),
});

export const fetchVinApiEndpoint = (handler = () => {}) => {
  return onValue(refs().endpoint, (snapshot) => {
    console.log('Firebase - Fetching VIN Api Endpoint');
    if (snapshot.exists()) handler(snapshot.val());
  });
};

export const fetchVinApiKey = (handler = () => {}) => {
  return onValue(refs().key, (snapshot) => {
    console.log('Firebase - Fetching VIN Api Key');
    if (snapshot.exists()) handler(snapshot.val());
  });
};
