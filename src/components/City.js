import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import europe from '../assess/europe.png';

const City = props => {
  const { cities, country } = props;
  return (
    <div className="wrapper">
      <div className="euro-wrapper">
        <div className="euro-map">
          <img src={europe} alt="europe" />
        </div>
        <div className="europ-description">
          <p className="p-euro title-country">{country}</p>
          {
          cities.reduce((a, b) => a + b.today_confirmed, 0)
          }
        </div>
      </div>
      <ul className="city-wrapper">
        {cities.map(v => (
          <li key={v.id} className="city-item">
            <span className="title-country">{v.name}</span>
            <span className="city-number">{v.today_confirmed}</span>
            <Link to="/" exact>
              <FiArrowRightCircle className="arrow-right" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

City.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  country: PropTypes.string.isRequired,
};

export default City;
