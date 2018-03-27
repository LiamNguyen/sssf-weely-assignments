const Images = require('../database/models/images');

module.exports.create = (
  id,
  title,
  category,
  details = '',
  coordinates,
  imageName
) => {
  Images.create({
    id,
    title,
    category,
    details,
    coordinates,
    imageName
  });
};

module.exports.findAll = callback => {
  Images.find(callback);
};
