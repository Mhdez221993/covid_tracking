import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';
import { fetchCountries } from '../redux/countries/country';

import europe from '../assess/europe.png';

const Country = () => {
  const dispatch = useDispatch();
  const { items, totalConfirmed } = useSelector(state => ({
    ...state.countries,
  }));

  useEffect(
    () => {
      if (!items.length) dispatch(fetchCountries('europe'));
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
          <p className="p-euro title-country">EUROPE</p>
          {totalConfirmed}
        </div>
      </div>
      <ul className="country-wrapper">
        {items.map(v => (
          <li key={v.name} className="country-item">
            <Link to={`/country/${v.name}`} exact>
              <FiArrowRightCircle className="arrow-right" />
            </Link>
            <div>
              <span className="title-country">{v.name}</span>
              <br />
              <span className="title-number">{v.confirmed}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
