const mongoose = require('mongoose');
const validator = require('validator');

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A userName is mandatory']
  },
  email: {
    type: String,
    required: [true, 'A email is required'],
    unique: true,
    lowercase: true,
    validator: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: true,
    minlenght: 8
  },
  passwordConfirm: {
    type: String,
    required: true
  },
  photo: String
});

const User = mongoose.model('User', userModel);

module.exports = User;
