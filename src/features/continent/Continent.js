import React, { useEffect, useState } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './continent.css';
import { fetchCountries } from './continentReducer';
import europe from './europe.png';

const Countries = () => {
  const dispatch = useDispatch();
  const { items, totalConfirmed } = useSelector(state => state.continent);
  const [searchList, setSearch] = useState([]);
  const [isSearching, setSearching] = useState(false);

  useEffect(
    () => {
      if (!items.length) dispatch(fetchCountries('europe'));
    },
    [searchList],
  );

  const handleSearch = searchString => {
    if (!searchString.length) {
      setSearch([]);
      setSearching(false);
    } else {
      setSearching(true);
      const curr = items.filter(v => v.country[0].toLowerCase() === searchString[0].toLowerCase());
      if (searchList !== curr) {
        setSearch([...curr]);
      }
    }
  };

  const list = items.sort((a, b) => b.confirmed - a.confirmed);
  const currList = isSearching ? searchList : list;

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
      <input
        type="text"
        placeholder="STATS BY COUNTRY"
        className="filter"
        onChange={e => handleSearch(e.target.value)}
      />
      <ul className="country-wrapper">
        {currList.map(({ country, confirmed }) => (
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
