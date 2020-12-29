import { createStore, combineReducers } from 'redux';
import loadReducer from './store/reducers/load';
import colorReducer from './store/reducers/color';

const rootReducer = combineReducers({
  load: loadReducer,
  color: colorReducer,
});

const store = createStore(rootReducer);

export default store;
