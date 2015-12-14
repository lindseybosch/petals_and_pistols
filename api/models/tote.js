var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');


var userSchema = require("../models/user")
var productSchema = require("../models/product")

var toteSchema = new mongoose.Schema({
  user:   [userSchema],
  product: [userProduct],
  quantity: integer
});

var Tote = mongoose.model('Tote', toteSchema);

module.exports = Tote;
