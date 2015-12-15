// Require resource's model(s).
var Product = require("../models/product");

var index = function(req, res, next){
  Product.findById(req.params.id, function(error, user){
    if (error) res.json({message: 'Could not find product because ' + error});
    res.render('products/show', {product: req.product})
  });
};

// create a new product
var create = function (req, res, next) {
  // res.json({message: req.body});
  Product.create(req.body, function(err, product){
    if (err) {
      res.send(err);
    }
      res.json(product);
  });
}

module.exports = {
  index: index,
  create: create
};

