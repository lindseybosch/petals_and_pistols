// Require resource's model(s).
var Tote = require("../models/tote");

var index = function(req, res, next){
  Tote.findById(req.params.id, function(error, user){
    if (error) res.json({message: 'Could not find product because ' + error});
    res.render('totes/show', {tote: req.tote})
  });
};

// create a new tote
var create = function (req, res, next) {
  // res.json({message: req.body});
  Tote.create(req.body, function(err, tote){
    if (err) {
      res.send(err);
    }
      res.json(tote);
  });
}

module.exports = {
  index: index,
  create: create
};
