const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
  imgURL: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('myMsg', msgSchema);
