import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import City from './components/City';
import Country from './components/Country';
import Nav from './components/Nav';

function App() {
  const [cities, setCities] = useState([]);
  const [country, setCityName] = useState('');
  const handleCity = (country, categories) => {
    setCities(categories);
    setCityName(country);
  };

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Country handleCity={handleCity} />
        </Route>
        <Route exact path="/city">
          <City cities={cities} country={country} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
