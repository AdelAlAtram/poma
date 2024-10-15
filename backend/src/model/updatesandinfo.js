const mongoose = require('mongoose');

const UpdatesandinfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}); 

const Updatesandinfo = mongoose.model('Updatesandinfo', UpdatesandinfoSchema);
module.exports = Updatesandinfo;
