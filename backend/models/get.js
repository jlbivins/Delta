const mongoose = require('mongoose');

const getSchema = mongoose.Schema({
  id: { type: String, required: true},
	city: { type: String, required: true},
	state: { type: String, required: true},
	departure: { type: String, required: true},
	arrival: { type: String, required: true},
})

 module.exports = mongoose.model('Get', getSchema);
