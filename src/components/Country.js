import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { loadCities } from '../redux/countries/country';
import europe from '../assess/europe.png';

const Country = props => {
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
          <p className="p-euro title-country">EUROPE</p>
          {
          contries.reduce((a, b) => a + b.today_confirmed, 0)
          }
        </div>
      </div>
      <ul className="country-wrapper">
        {contries.map(v => (
          <li key={v.id} className="country-item">
            <NavLink to="/city" exact>
              <FiArrowRightCircle className="arrow-right" onClick={() => props.handleCity(v.name, v.regions)} />
            </NavLink>
            <div>
              <span className="title-country">{v.name}</span>
              <br />
              <span className="title-number">{v.today_confirmed}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Country.propTypes = {
  handleCity: PropTypes.func.isRequired,
};

export default Country;
