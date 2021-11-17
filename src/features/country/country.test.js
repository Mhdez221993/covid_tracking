import reducer, { setCountry } from './countryReducer';

describe('countryReducer', () => {
  const initialState = [];

  test('should return the initial state', () => {
    const newState = reducer(undefined, []);

    expect(newState).toEqual(initialState);
  });

  test('should handle adding countries', () => {
    const finanlState = [{ country: 'Testing country 1', confirmed: 3 }];

    const data = { country: 'Testing country 1', confirmed: 3 };

    const newState = reducer(initialState, setCountry(data));
    expect(newState).toEqual(finanlState);
  });

  test('should handle adding selected country', () => {
    const finanlState = [
      { country: 'Testing country 1', confirmed: 11 },
      { country: 'Testing country 2', confirmed: 50 },
      { country: 'Testing country 3', confirmed: 200 },
    ];

    const data1 = { country: 'Testing country 1', confirmed: 11 };
    const data2 = { country: 'Testing country 2', confirmed: 50 };
    const data3 = { country: 'Testing country 3', confirmed: 200 };

    const prevState1 = reducer(initialState, setCountry(data1));
    const prevState2 = reducer(prevState1, setCountry(data2));
    const newState = reducer(prevState2, setCountry(data3));

    expect(newState).toEqual(finanlState);
  });
});
