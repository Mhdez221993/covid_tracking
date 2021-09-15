import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

const Nav = () => (
  <nav className="navBar">
    <div className="back">
      <NavLink to="/" exact>
        <IoIosArrowBack className="back-arrow" />
      </NavLink>
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
