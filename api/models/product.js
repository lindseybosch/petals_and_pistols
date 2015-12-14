var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var productSchema = new mongoose.Schema({
  type:   String,
  occassion: String,
  size: integer,
  color: String,
  quantity: integer
});

var Product = mongoose.model('Product', userSchema);

module.exports = Product;
