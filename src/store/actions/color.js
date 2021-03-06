/*

---> TL;DR Redux Actions for load Reducer <---

*/

// Export Action String for easy import in Reducer
export const SET_DARK = 'SET_DARK';
export const SET_LIGHT = 'SET_LIGHT';
export const TOGGLE_DARK = 'TOGGLE_DARK';

// Export Action Dispatchers
export const setDark = () => ({ type: SET_DARK });
export const setLight = () => ({ type: SET_LIGHT });
export const toggleDark = () => ({ type: TOGGLE_DARK });
