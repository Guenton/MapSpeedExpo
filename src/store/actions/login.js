/*

---> TL;DR Redux Actions for Login Reducer <---

*/

// Export Action String for easy import in Reducer
export const SET_LOGIN_TYPE = 'SET_LOGIN_TYPE';

// Export Action Dispatchers
export const startLoading = (loginType = '') => ({ type: SET_LOGIN_TYPE, loginType });
