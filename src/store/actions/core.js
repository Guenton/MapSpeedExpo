import { parseFirebaseError } from '../../firebase/auth';

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SET_ROUTE = 'SET_ROUTE';
export const SET_LOADING = 'SET_LOADING';
export const SET_KEYBOARD_OPEN = 'SET_KEYBOARD_OPEN';
export const SET_VEHICLE_ARRAY = 'SET_VEHICLE_ARRAY';
export const SET_ALERT = 'SET_ALERT';

export const toggleDarkMode = () => ({ type: TOGGLE_DARK_MODE });
export const setRoute = (route = 'start') => ({ type: SET_ROUTE, route });
export const setLoading = (bool = true) => ({ type: SET_LOADING, bool });
export const setKeyboardOpen = (bool = true) => ({ type: SET_KEYBOARD_OPEN, bool });
export const setVehicleArray = (array = []) => ({ type: SET_VEHICLE_ARRAY, array });
export const setAlert = (text = '', severity = 'error') => ({
  type: SET_ALERT,
  text: parseFirebaseError(text),
  severity,
});
