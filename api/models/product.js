var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var productSchema = new mongoose.Schema({
  type:   String,
  occassion: String,
  size: String,
  color: String,
  quantity: Number
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
