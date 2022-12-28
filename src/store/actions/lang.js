export const SET_CURRENT_LANG = 'SET_CURRENT_LANG';

export const setCurrentLang = (language = 'en') => {
  return { type: SET_CURRENT_LANG, language };
};
