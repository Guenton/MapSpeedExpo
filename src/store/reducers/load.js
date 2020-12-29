/*

The load.js Redux Reducer exposes the load Reducer and mantains its state
- The Respective Redux Actions are imported from the ../actions directory from the file by the same name
- The ALL_CAPS_SNAKECASE_VARIABLES already contain the string by the same name
- They and can therefore be used in as a case in the Reducer Switch right away
- This decreases typos and makes it easy to see what string the variable contains
- In This application Redux Actions are never Asynchronous
- This Redux Reducer receive Synchronous data from Actions and mutates the state

- Redux Reducer follows the Redux documentation and style guidelines at:
- Docs: https://redux.js.org/
- Docs: https://redux.js.org/style-guide/style-guide


---> TL;DR Redux Reducer for load State <---

*/

// import Actions
import { START_LOADING, STOP_LOADING } from '../actions/load';

// Set Initial State
const initialState = {
  isLoading: false,
};

// Receive Actions and Update State Accordingly
const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default loadReducer;
