import { createStore, combineReducers } from 'redux';

import coreReducer from './store/reducers/core';
import authReducer from './store/reducers/auth';
import animationReducer from './store/reducers/animation';
import langReducer from './store/reducers/lang';
import loginReducer from './store/reducers/login';

const rootReducer = combineReducers({
  core: coreReducer,
  auth: authReducer,
  animation: animationReducer,
  lang: langReducer,
  login: loginReducer,
});

const store = createStore(rootReducer);

export default store;
