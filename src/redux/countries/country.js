import * as API from './api';

const LOAD_COUNTRIES = 'countries/country/LOAD_COUNTRIES';
const LOAD_COUNTRY = 'countries/country/LOAD_COUNTRY';
const initialState = {
  totalConfirmed: 0,
  items: [],
  selected: null,
};

export const loadCountries = payload => ({
  type: LOAD_COUNTRIES,
  payload,
});

export const loadCountry = payload => ({
  type: LOAD_COUNTRY,
  payload,
});

export const fetchCountry = name => async dispatch => {
  const data = await API.getCountry(name);

  dispatch(loadCountry(data));
};

export const fetchCountries = name => async dispatch => {
  const cities = await API.getCountries(name);
  const data = Object.values(cities).reduce((accumulator, currentValue) => {
    const { All: { country, confirmed } } = currentValue;

    accumulator.items.push({ name: country, confirmed });
    accumulator.totalConfirmed += confirmed;

    return accumulator;
  }, {
    totalConfirmed: 0,
    items: [],
  });

  data.items = data.items.sort((a, b) => b.confirmed - a.confirmed);
  dispatch(loadCountries(data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return action.payload;
    case LOAD_COUNTRY:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default reducer;
