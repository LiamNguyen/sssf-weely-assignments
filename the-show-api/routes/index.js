const fileUpload = require('./FileUpload');
const images = require('./Images');

module.exports = app => {
  app.use(fileUpload);
  app.use(images);
};
