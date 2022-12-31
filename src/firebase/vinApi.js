import { db } from './app';
import { ref, onValue, get } from 'firebase/database';

// Document Paths
const paths = () => ({
  vinApi: 'vinApi/',
});

// Refferences
const refs = () => ({
  endpoint: ref(db, paths().vinApi + 'endpoint'),
  autoDevKey: ref(db, paths().vinApi + 'autoDevKey'),
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

export const watchAutoDevKey = (handler = () => {}) => {
  return onValue(refs().autoDevKey, (snapshot) => {
    console.log('Firebase - Watching auto.dev Api Key');
    if (snapshot.exists()) handler(snapshot.val());
  });
};

export const fetchAutoDevKey = () => {
  console.log('Firebase - Fetching auto.dev Api Key');
  return get(refs().autoDevKey)
    .then((snapshot) => {
      if (snapshot.exists()) return snapshot.val();
    })
    .catch((err) => {
      throw err;
    });
};
