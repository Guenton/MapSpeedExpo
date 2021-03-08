/*

---> TL;DR Redux Reducer for load State <---

*/

// import Actions
import { SET_LOGIN_TYPE } from '../actions/login';

// Set Initial State
const initialState = {
  loginType: '',
};

// Receive Actions and Update State Accordingly
const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_TYPE:
      return { ...state, logintype: action.loginType };
    default:
      return state;
  }
};

export default loadReducer;
