import getContries from './api';

const SET_CITIES = 'countries/country/SET_CITIES';
const initialState = [];

const setCities = payload => ({
  type: SET_CITIES,
  payload,
});

export const loadCities = () => async dispatch => {
  const cities = await getContries();
  if (cities) {
    dispatch(setCities(cities));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
