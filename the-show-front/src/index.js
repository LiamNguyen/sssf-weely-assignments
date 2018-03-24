import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './assets/stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(
  <HashRouter>
    <MuiThemeProvider muiTheme={getMuiTheme({})}>
      <App />
    </MuiThemeProvider>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
