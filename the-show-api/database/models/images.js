const mongoose = require('mongoose');
const GUID = require('mongoose-guid');

const imagesSchema = mongoose.Schema({
  id: {
    type: GUID.type,
    default: GUID.value
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  details: {
    type: String
  },
  coordinates: {
    type: Object,
    required: true
  },
  url: {
    type: String
  },
  imageName: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model(
  'Images',
  imagesSchema,
  'Images'
);
