import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import continent from './features/continent/continentReducer';
import country from './features/country/countryReducer';

function createTestStore() {
  const store = createStore(
    combineReducers({
      continent,
      country,
    }),
    applyMiddleware(thunk),
  );
  return store;
}

const reducer = combineReducers({
  continent,
  country,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

function testRender(
  ui,
  {
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { testRender, createTestStore };
