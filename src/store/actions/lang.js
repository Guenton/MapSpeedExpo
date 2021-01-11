/*

---> TL;DR Redux Actions for lang Reducer <---

*/

// Export Action String for easy import in Reducer
export const SET_LANG = 'SET_LANG';

// Export Action Dispatchers
export const setLang = (languagePack = {}) => ({ type: SET_LANG, languagePack });
