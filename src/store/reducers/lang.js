/*

---> TL;DR Redux Reducer for Language State <---

*/

// import Actions
import { SET_LANG } from '../actions/lang';

// Set Initial State
const initialState = {
  currentLang: 'eng',
  availableLang: ['pap', 'nld', 'spa', 'eng'],
};

// Receive Actions and Update State Accordingly
const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return { ...state, ...action.languagePack };
    default:
      return state;
  }
};

export default loadReducer;
