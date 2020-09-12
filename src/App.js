import React from 'react';
import './App.css';

//npm install react-router-dom

import Counter from './components/Counter';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Counter />
      <List />
    </div>
  );
}

export default App;
