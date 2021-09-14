import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      id: 2,
      path: '/',
    },
    {
      id: 3,
      path: '/city',
    },
  ];

  return (
    <nav className="navBar">
      <ul className="nav-list">
        {links.map(link => (
          <li key={link.id} className="nav-links">
            <NavLink to={link.path} activeClassName="active-link" exact />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
