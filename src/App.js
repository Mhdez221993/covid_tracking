import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Details from './components/City';
import Home from './components/Country';
import Nav from './components/Nav';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/country/:name',
    name: 'Details',
    component: Details,
  },
];

const App = () => (
  <Router>
    <Nav />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} exact path={path} component={component} />
      ))}
    </Switch>
  </Router>
);

export default App;
