/*

The lang.js Redux actions expose all lang reducer specific actions
- The action type is set to an ALL_CAPS_SNAKECASE_VARIABLE and named the same as its contens
- This is done in order to easily use the type string in the dispatch function itself
- And also facilitates easily importing it for use it in the reducer
- In This application Redux Actions are never Asynchronous
- Actions receive Synchronous data and mutate the state

- Redux Actions follows the Redux documentation and style guidelines at:
- Docs: https://redux.js.org/
- Docs: https://redux.js.org/style-guide/style-guide 


---> TL;DR Redux Actions for lang Reducer <---

*/

// Export Action String for easy import in Reducer
export const SET_LANG = 'SET_LANG';

// Export Action Dispatchers
export const setLang = (languagePack = {}) => {
  return { type: SET_LANG, languagePack };
};
