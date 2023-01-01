import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './en';
import es from './es';
import nl from './nl';
import pap from './pap';

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

export const setLanguageAsync = (language = '') => {
  return i18n.changeLanguage(language).catch((err) => {
    throw err;
  });
};
