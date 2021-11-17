import { getCountry } from '../../app/api';

const SET_COUNTRY = 'countries/country/SET_COUNTRY';
const initialState = [];

export const setCountry = payload => ({
  type: SET_COUNTRY,
  payload,
});

export const fetchCountry = name => async dispatch => {
  const data = await getCountry(name);

  if (data) {
    const list = Object.entries(data).slice(1);
    list.forEach(([name, { confirmed }]) => {
      dispatch(setCountry({ name, confirmed }));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
