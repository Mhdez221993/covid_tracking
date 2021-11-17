import React, { useEffect } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import europe from '../continent/europe.png';
import './country.css';
import { fetchCountry } from './countryReducer';

const City = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const list = useSelector(state => state.country);

  useEffect(
    () => {
      if (!list.length) dispatch(fetchCountry(name));
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
          <p className="p-euro title-country">{name}</p>
        </div>
      </div>
      <h5 className="city-section">CITY/TOWN BREAKDOWN - 2021</h5>
      <ul className="city-wrapper">
        {list.map(({ name, confirmed }) => (
          <li key={name} className="city-item">
            <span className="title-country">{name}</span>
            <span className="city-number">{confirmed}</span>
            <Link to="/" exact="true">
              <FiArrowRightCircle className="arrow-right" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default City;
