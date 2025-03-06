const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  graduationYear: { type: Number, required: true }
});

module.exports = mongoose.model('Registration', RegistrationSchema);