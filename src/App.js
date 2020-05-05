import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Home />
      </div>
    </Router>
  );
}
export default App;
