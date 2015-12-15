var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

mongoose.Promise = Promise;

var userSchema = new mongoose.Schema({
  name:   String,
  email: String,
  password: String
});


// add bcrypt hashing to model (works on a password field)!
userSchema.plugin(require('mongoose-bcrypt'));

var User = mongoose.model('User', userSchema);

module.exports = User;
