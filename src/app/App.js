import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Continent from '../features/continent/Continent';
import Country from '../features/country/Country';
import Nav from '../features/Nav/Nav';
import './app.css';

const routes = [
  {
    path: '/',
    name: 'Continent',
    component: <Continent />,
  },
  {
    path: '/country/:name',
    name: 'Country',
    component: <Country />,
  },
];

const App = () => (
  <Router>
    <Nav />
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  </Router>
);

export default App;
