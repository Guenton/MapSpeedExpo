import { createStore, combineReducers } from 'redux';

import coreReducer from './store/reducers/core';
import authReducer from './store/reducers/auth';
import langReducer from './store/reducers/lang';
import colorReducer from './store/reducers/color';
import loginReducer from './store/reducers/login';

const rootReducer = combineReducers({
  core: coreReducer,
  auth: authReducer,
  lang: langReducer,
  color: colorReducer,
  login: loginReducer,
});

const store = createStore(rootReducer);

export default store;
