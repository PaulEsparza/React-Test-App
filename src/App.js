import React from 'react';
import './App.css';

//npm install react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Counter from './components/Counter';
import List from './components/List';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/counter">
          <Counter />
          </Route>
          <Route path="/list">
          <List />
          </Route>
          <Route path="/" exact>
          <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
