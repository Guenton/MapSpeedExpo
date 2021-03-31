/*

---> TL;DR Redux Actions for user Reducer <---

*/

// Set action types
export const LOGIN_USER_GOOGLE = 'LOGIN_USER_GOOGLE';
export const LOGIN_USER_FACEBOOK = 'LOGIN_USER_FACEBOOK';

// Export actions dispatchers
export const loginUserGoogle = (user) => ({
  type: LOGIN_USER_GOOGLE,
  user,
});

export const loginUserFacebook = (user) => ({
  type: LOGIN_USER_FACEBOOK,
  user,
});
