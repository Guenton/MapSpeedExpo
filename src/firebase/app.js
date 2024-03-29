import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.API_KEY,
  authDomain: Constants.expoConfig.extra.AUTH_DOMAIN,
  databaseURL: Constants.expoConfig.extra.DATABASE_URL,
  projectId: Constants.expoConfig.extra.PROJECT_ID,
  storageBucket: Constants.expoConfig.extra.STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig.extra.MESSAGING_SENDER_ID,
  appId: Constants.expoConfig.extra.APP_ID,
  measurementId: Constants.expoConfig.extra.MEASUREMENT_ID,
};

// Initialize Firebase App and Database
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
