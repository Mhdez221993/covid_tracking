import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import country from '../features/cities/citiesReducer';
import continent from '../features/countries/countriesReducer';

const reducer = combineReducers({
  continent,
  country,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
