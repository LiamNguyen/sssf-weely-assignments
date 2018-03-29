const Images = require('../database/models/images');

module.exports.create = (
  title,
  category,
  details = '',
  coordinates,
  imageName,
  callback
) => {
  console.log(details);
  Images.create({
    title,
    category,
    details,
    coordinates,
    imageName
  }, callback);
};

module.exports.findAll = callback => {
  Images.find(callback);
};
