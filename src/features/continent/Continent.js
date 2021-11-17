import React, { useEffect } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './continent.css';
import { fetchCountries } from './continentReducer';
import europe from './europe.png';

const Countries = () => {
  const dispatch = useDispatch();
  const { items, totalConfirmed } = useSelector(state => state.continent);

  useEffect(
    () => {
      if (!items.length) dispatch(fetchCountries('europe'));
    },
    [],
  );

  const list = items.sort((a, b) => b.confirmed - a.confirmed);

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
        {list.map(({ country, confirmed }) => (
          <li key={country} className="country-item">
            <Link to={`/country/${country}`} exact="true">
              <FiArrowRightCircle className="arrow-right" />
            </Link>
            <div>
              <span className="title-country">{country}</span>
              <br />
              <span className="title-number">{confirmed}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
