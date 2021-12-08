import i18n from 'i18n-js';

export const SET_CURRENT_LANG = 'SET_CURRENT_LANG';

export const setCurrentLang = (language = 'en') => {
  i18n.locale = language;
  return { type: SET_CURRENT_LANG, language };
};
