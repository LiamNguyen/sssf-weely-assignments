import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/index.css';
import HomePage from './HomePage';
import AddImagePage from './AddImagePage';
import history from '../history';
import RoutePathConstants from '../constants/RoutePathConstants';

const { home, addImage } = RoutePathConstants;

class App extends Component {
  componentWillMount() {
    if (history.location.pathname === '/') {
      history.push(`/${home}`);
    }
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path={`/${home}`} component={HomePage} />
          <Route exact path={`/${addImage}`} component={AddImagePage} />
        </div>
      </Router>
    );
  }
}

export default App;
