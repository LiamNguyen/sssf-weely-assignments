const fileUpload = require('./FileUpload');

module.exports = app => {
  app.use(fileUpload);
};
