import reducer, { setContinent } from './continentReducer';

describe('continentReducer', () => {
  const prevState = {
    items: [],
    totalConfirmed: 0,
  };

  test('should return the initial state', () => {
    const initialState = {
      items: [],
      totalConfirmed: 0,
    };

    const newState = reducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  test('should handle adding countries', () => {
    const finanlState = {
      items: [{ country: 'Testing country 1', confirmed: 3 }],
      totalConfirmed: 3,
    };
    const data = { country: 'Testing country 1', confirmed: 3 };

    const newState = reducer(prevState, setContinent(data));
    expect(newState).toEqual(finanlState);
  });

  test('should handle adding selected country', () => {
    const finanlState = {
      items: [
        { country: 'Testing country 1', confirmed: 11 },
        { country: 'Testing country 2', confirmed: 50 },
        { country: 'Testing country 3', confirmed: 200 },
      ],
      totalConfirmed: 261,
    };

    const data1 = { country: 'Testing country 1', confirmed: 11 };
    const data2 = { country: 'Testing country 2', confirmed: 50 };
    const data3 = { country: 'Testing country 3', confirmed: 200 };

    const prevState1 = reducer(prevState, setContinent(data1));
    const prevState2 = reducer(prevState1, setContinent(data2));
    const newState = reducer(prevState2, setContinent(data3));

    expect(newState).toEqual(finanlState);
  });
});
