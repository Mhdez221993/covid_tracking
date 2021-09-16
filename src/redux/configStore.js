import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countries/country';

const reducer = combineReducers({
  countries: countriesReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
