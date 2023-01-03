import {
  TOGGLE_DARK_MODE,
  SET_ROUTE,
  SET_LOADING,
  SET_KEYBOARD_OPEN,
  SET_ALERT,
  SET_VEHICLE_ARRAY,
  SET_VEHICLE_ARRAY_POSITION,
} from '../actions/core';

const initialState = {
  isDark: false,
  isLoading: false,
  isKeyboardOpen: false,
  route: 'start',
  vehicleArray: [],
  vehicleArrayPosition: 0,
  alert: {
    text: '',
    severity: 'error',
  },
};

const coreReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, isDark: !state.isDark };
    case SET_ROUTE:
      return { ...state, route: action.route };
    case SET_LOADING:
      return { ...state, isLoading: action.bool };
    case SET_KEYBOARD_OPEN:
      return { ...state, isKeyboardOpen: action.bool };
    case SET_VEHICLE_ARRAY:
      return { ...state, vehicleArray: action.array };
    case SET_VEHICLE_ARRAY_POSITION:
      return { ...state, vehicleArrayPosition: action.int };
    case SET_ALERT:
      return { ...state, alert: { ...state.alert, text: action.text, severity: action.severity } };
    default:
      return state;
  }
};

export default coreReducer;
