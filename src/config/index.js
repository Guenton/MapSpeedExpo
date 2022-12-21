import { LogBox } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './lang/en';
import es from './lang/es';
import nl from './lang/nl';
import pap from './lang/pap';

import firebase from 'firebase';

export const initFirebaseTimeoutErrorBypass = () => LogBox.ignoreLogs(['Setting a timer']);

const i18nextLangConfig = {
  en: { translation: en },
  es: { translation: es },
  nl: { translation: nl },
  pap: { translation: pap },
};

export const initLanguages = () => {
  i18n.use(initReactI18next).init({
    lng: Localization.getLocales()[0].languageCode,
    fallBackLng: 'en',
    resources: i18nextLangConfig,
    interpolation: { excapeValue: false },
    compatibilityJSON: 'v3',
  });
};

export const initFirebase = async () => {
  // Clear Residual Firebase Apps
  if (firebase.apps.length > 0) {
    await Promise.all(
      firebase.apps.map(async (app) => {
        try {
          await app.delete();
        } catch (err) {
          console.error(err);
        }
      }),
    );
  }

  firebase.initializeApp({
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABASE_URL,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID,
  });
};
