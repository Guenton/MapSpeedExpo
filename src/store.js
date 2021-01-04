import { createStore, combineReducers } from 'redux';
import loadReducer from './store/reducers/load';
import colorReducer from './store/reducers/color';
import langReducer from './store/reducers/lang';

const rootReducer = combineReducers({
  load: loadReducer,
  color: colorReducer,
  lang: langReducer,
});

const store = createStore(rootReducer);

export default store;
