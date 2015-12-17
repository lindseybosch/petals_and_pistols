// Require resource's model(s).
var User = require("../models/user");


var index = function(req, res, next){
  User.find({}, function(error, users){
    res.json(users);
  })
};

// var show = function(req, res, next){
//   User.findById(req.params.id, function(error, user){
//     if (error) res.json({message: 'Could not find user because ' + error});
//     res.render('users/show', {user: req.user})
//   });
// };

var addToTote = function(req, res){
  User.findOne({email: req.body.email}, function(error, user){
    if (error) res.json({message: 'Could not find user because ' + error});
    user.products.push(req.body.productId);
    user.save(function(err){
      res.json(user.products);
    })
  });
};

// create a new user
var create = function (req, res, next) {
  console.log({message: req.body});
  User.create(req.body, function(err, user){
    if (err) {
      res.send(err);
    }
      res.json(user);
  });
}

module.exports = {
  index: index,
  addToTote: addToTote,
  create: create
};
