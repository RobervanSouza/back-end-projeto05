const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  cpf: {
    type: Number,
    required: true,
    unique: true,
    select: false,
  },
  isAdmin: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model('usuarios', UserSchema);

module.exports = User;
