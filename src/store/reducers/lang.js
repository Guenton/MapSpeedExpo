import { SET_CURRENT_LANG } from '../actions/lang';

// Set Initial State
const initialState = {
  currentLang: 'en',
  availableLang: ['pap', 'nl', 'es', 'en'],
};

// Receive Actions and Update State Accordingly
const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LANG:
      return { ...state, currentLang: action.language };
    default:
      return state;
  }
};

export default langReducer;
