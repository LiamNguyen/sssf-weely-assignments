var mongoose = require('mongoose');
var GUID = require('mongoose-guid');

var patientSchema = mongoose.Schema({
  _id: {
    type: GUID.type,
    default: GUID.value
  },
  name: {
    type: String,
    required: true
  },
  channel: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

var Patient = module.exports = mongoose.model('Patient', patientSchema, 'patient');

module.exports.getAllPatients = function(callback) {
  Patient.find(callback);
}

//Get patient by channnel
module.exports.getPatientByChannel = function(channel, callback) {
  Patient.findOne({ 'channel': channel }, callback);
}

//Add patient
module.exports.addPatient = function(patient, callback) {
  Patient.create(patient, callback);
}
