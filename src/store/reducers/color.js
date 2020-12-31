/*

The Color.js Redux Reducer exposes the Color Reducer and mantains its state
- The Respective Redux Actions are imported from the ../actions directory from the file by the same name
- The ALL_CAPS_SNAKECASE_VARIABLES already contain the string by the same name
- They and can therefore be used in as a case in the Reducer Switch right away
- This decreases typos and makes it easy to see what string the variable contains
- In This application Redux Actions are never Asynchronous
- This Redux Reducer receive Synchronous data from Actions and mutates the state

- Redux Reducer follows the Redux documentation and style guidelines at:
- Docs: https://redux.js.org/
- Docs: https://redux.js.org/style-guide/style-guide


---> TL;DR Redux Reducer for Color State <---

*/

// import Actions
import { SET_DARK, SET_LIGHT } from '../actions/color';

// Set Initial State
const initialState = {
  isDark: false,
  primary: '#A60A0A',
  primaryTint: '#A60A0A17',
  primaryOpacity: '#A60A0AD0',
  accent: '#FFCC01',
  success: '#AACF39',
  warning: '#F58319',
  error: '#EE161F',
  white: '#FFFFFF',
  black: '#000000',
  // Below Not used yet
  secondary: '#43b14a',
  info: '#4f67af',
  secondaryTint: '#43B14A17',
  secondaryOpacity: '#43B14AF0',
};

// Receive Actions and Update State Accordingly
const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK:
      return { ...state, isDark: true };
    case SET_LIGHT:
      return { ...state, isDark: false };
    default:
      return state;
  }
};

export default loadReducer;
