import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import continent from '../features/continent/continentReducer';
import country from '../features/country/countryReducer';

const reducer = combineReducers({
  continent,
  country,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
