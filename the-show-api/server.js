const express = require('express');
const database = require('./database');
const appConfig = require('./config/appConfig');
const routes = require('./routes');

const app = express();

database.connect();
routes(app);
appConfig(app);

app.listen(5000);
console.log('Listening on port 5000...');
