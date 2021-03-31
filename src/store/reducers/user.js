/*

---> TL;DR Redux Reducer for User State <---

*/

// import Actions
import { LOGIN_USER_GOOGLE, LOGIN_USER_FACEBOOK } from '../actions/user';

// Set Initial State
const initialState = {
  facebook: {},
  google: {},
};

// Receive actions and update state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_GOOGLE:
      return { ...state, google: action.user };
    case LOGIN_USER_FACEBOOK:
      return { ...state, facebook: action.user };
    default:
      return state;
  }
};

export default userReducer;
