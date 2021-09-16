import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { fetchCountry } from '../redux/countries/country';
import europe from '../assess/europe.png';

const City = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { country } = useSelector(state => ({
    country: state.countries.selected,
  }));

  useEffect(
    () => {
      dispatch(fetchCountry(name));
      console.log(country);
    },
    [],
  );

  if (!country) {
    return null;
  }

  const { All } = country;
  const list = Object.entries(country).slice(1);
  return (
    <div className="wrapper">
      <div className="euro-wrapper">
        <div className="euro-map">
          <img src={europe} alt="europe" />
        </div>
        <div className="europ-description">
          <p className="p-euro title-country">{All.country}</p>
        </div>
      </div>
      <h5 className="city-section">CITY/TOWN BREAKDOWN - 2021</h5>
      <ul className="city-wrapper">
        {list.map(([name, {confirmed}]) => (
          <li key={name} className="city-item">
            <span className="title-country">{name}</span>
            <span className="city-number">{confirmed}</span>
            <Link to="/" exact>
              <FiArrowRightCircle className="arrow-right" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default City;
