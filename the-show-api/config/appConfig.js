require('dotenv').config();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const requestMiddleware = require('../middlewares/RequestMiddleware');

module.exports = app => {
  app.use(fileUpload());
  app.use(bodyParser.json());
  requestMiddleware(app);
};
