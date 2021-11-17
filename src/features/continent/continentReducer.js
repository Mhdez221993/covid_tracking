import { getContinent } from '../../app/api';

const SET_CONTINENT = 'countries/country/SET_CONTINENT';
const initialState = {
  totalConfirmed: 0,
  items: [],
};

const setContinent = payload => ({
  type: SET_CONTINENT,
  payload,
});

export const fetchCountries = name => async dispatch => {
  const data = await getContinent(name);
  if (data) {
    Object.values(data).forEach(({ All: { country, confirmed } }) => {
      dispatch(setContinent({ country, confirmed }));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTINENT:
      return {
        items: [...state.items, action.payload],
        totalConfirmed: state.totalConfirmed + action.payload.confirmed,
      };
    default:
      return state;
  }
};

export default reducer;
