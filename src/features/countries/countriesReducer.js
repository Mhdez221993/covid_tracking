import { getCountries } from '../../app/api';

const LOAD_COUNTRIES = 'countries/country/LOAD_COUNTRIES';
const initialState = {
  totalConfirmed: 0,
  items: [],
};

export const loadCountries = payload => ({
  type: LOAD_COUNTRIES,
  payload,
});

export const fetchCountries = name => async dispatch => {
  const cities = await getCountries(name);
  if (cities) {
    Object.values(cities).forEach(({ All: { country, confirmed } }) => {
      dispatch(loadCountries({ country, confirmed }));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return {
        items: [...state.items, action.payload],
        totalConfirmed: state.totalConfirmed + action.payload.confirmed,
      };
    default:
      return state;
  }
};

export default reducer;
