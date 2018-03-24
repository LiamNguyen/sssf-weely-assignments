import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/index.css';
import WeekOne from './WeekOne';
import history from '../history';
import RoutePathConstants from '../constants/RoutePathConstants';

const { weekOne } = RoutePathConstants;

class App extends Component {
  componentWillMount() {
    if (history.location.pathname === '/') {
      history.push(`/${weekOne}`);
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
          <Route exact path={`/${weekOne}`} component={WeekOne} />
        </div>
      </Router>
    );
  }
}

export default App;
