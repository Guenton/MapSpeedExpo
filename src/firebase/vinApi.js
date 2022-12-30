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

export const watchVinApiEndpoint = (handler = () => {}) => {
  return onValue(refs().endpoint, (snapshot) => {
    console.log('Firebase - Fetching VIN Api Endpoint');
    if (snapshot.exists()) handler(snapshot.val());
  });
};

export const fetchVinApiEndpoint = () => {
  console.log('Firebase - Fetching VIN Api Endpoint');
  return get(refs().endpoint)
    .then((snapshot) => {
      if (snapshot.exists()) return snapshot.val();
    })
    .catch((err) => {
      throw err;
    });
};

export const watchVinApiKey = (handler = () => {}) => {
  return onValue(refs().key, (snapshot) => {
    console.log('Firebase - Fetching VIN Api Key');
    if (snapshot.exists()) handler(snapshot.val());
  });
};

export const fetchVinApiKey = () => {
  console.log('Firebase - Fetching VIN Api Key');
  return get(refs().key)
    .then((snapshot) => {
      if (snapshot.exists()) return snapshot.val();
    })
    .catch((err) => {
      throw err;
    });
};
