import React from 'react';
import { BsFillMicFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => (
  <nav className="navBar">
    <div className="back">
      <Link to="/" exact="true">
        <IoIosArrowBack className="back-arrow" />
      </Link>
      <span className="date">{new Date().toJSON().slice(0, 4)}</span>
    </div>
    <span className="all-cases">Cases in Europe</span>
    <div className="tools">
      <BsFillMicFill />
      <FiSettings className="setting" />
    </div>
  </nav>
);

export default Nav;
