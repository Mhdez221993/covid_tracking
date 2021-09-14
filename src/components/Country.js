import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCities } from '../redux/countries/country';
import russia from '../assess/ru.png';

const Country = () => {
  const dispatch = useDispatch();
  const contries = useSelector(store => store.state);

  useEffect(
    () => {
      if (contries.length === 0) dispatch(loadCities());
      console.log(contries);
    },
    [],
  );

  return (
    <div>
      Welcome to the Country conponent
      <img src={russia} alt="Russia map" />
    </div>
  );
};

export default Country;
