import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Cities from '../features/cities/Cities';
import Countries from '../features/countries/Countries';
import Nav from '../features/Nav/Nav';

const routes = [
  {
    path: '/',
    name: 'Countries',
    component: <Countries />,
  },
  {
    path: '/country/:name',
    name: 'Cities',
    component: <Cities />,
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
