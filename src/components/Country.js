import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';
import { loadCities } from '../redux/countries/country';
import europe from '../assess/europe.png';

const Country = () => {
  const dispatch = useDispatch();
  const contries = useSelector(store => store.state);

  useEffect(
    () => {
      if (contries.length === 0) dispatch(loadCities());
    },
    [],
  );

  return (
    <div className="wrapper">
      <div className="euro-wrapper">
        <div className="euro-map">
          <img src={europe} alt="europe" />
        </div>
        <div className="europ-description">
          <p className="p-euro">EUROPE</p>
          {
          contries.reduce((a, b) => a + b.today_confirmed, 0)
          }
        </div>
      </div>
      <ul className="country-wrapper">
        {contries.map(v => (
          <li key={v.id} className="country-item">
            <FiArrowRightCircle className="arrow-right" />
            <div>
              <span>{v.name}</span>
              <br />
              <span>{v.today_confirmed}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
