import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/index.css';
import Home from './Home';
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
