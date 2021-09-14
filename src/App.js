import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import City from './components/City';
import Country from './components/Country';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Country />
          </Route>
          <Route exact path="/city">
            <City />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
