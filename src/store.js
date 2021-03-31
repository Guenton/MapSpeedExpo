import { createStore, combineReducers } from 'redux';
import loadReducer from './store/reducers/load';
import colorReducer from './store/reducers/color';
import langReducer from './store/reducers/lang';
import userReducer from './store/reducers/user';

const rootReducer = combineReducers({
  load: loadReducer,
  color: colorReducer,
  lang: langReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
