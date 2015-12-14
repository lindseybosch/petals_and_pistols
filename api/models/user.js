var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  name:   String,
  email: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
