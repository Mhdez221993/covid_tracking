import React, { useState } from 'react';
import {
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
    <div className="App">
      <div className="main">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Country handleCity={handleCity} />
          </Route>
          <Route exact path="/city">
            <City cities={cities} country={country} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
