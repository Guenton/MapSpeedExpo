import { createStore, combineReducers } from 'redux';

import coreReducer from './store/reducers/core';
import authReducer from './store/reducers/auth';
import animationReducer from './store/reducers/animation';
import langReducer from './store/reducers/lang';
import vehicleReducer from './store/reducers/vehicle';

const rootReducer = combineReducers({
  core: coreReducer,
  auth: authReducer,
  animation: animationReducer,
  lang: langReducer,
  vehicle: vehicleReducer,
});

const store = createStore(rootReducer);

export default store;
