const mongoose = require('mongoose');

const NewSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date
});

const NewModel = mongoose.model('NewCollection', NewSchema);

module.exports = NewModel;