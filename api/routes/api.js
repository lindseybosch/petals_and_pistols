var express = require('express');
var router = express.Router();


// load mongoose and connect to a database
var mongoose = require('mongoose');

// Require controllers.
var usersController = require('../controllers/users');
var productController = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users', usersController.create);

router.get('/users', usersController.index);

router.post('/products', productController.create);

// router.get('/totes', function(req, res, next){
//   res.send('Tote Page');
// });

// router.post('/totes', toteController.create);


module.exports = router;
