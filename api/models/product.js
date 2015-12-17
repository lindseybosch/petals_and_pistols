var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

mongoose.Promise = Promise;

var productSchema = new mongoose.Schema({
  type:   String,
  occassion: String,
  size: String,
  color: String,
  quantity: Number,
  imageURL: String
});


var Product = mongoose.model('Product', productSchema);

module.exports = Product;
