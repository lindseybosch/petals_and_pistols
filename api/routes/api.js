var express = require('express');
var router = express.Router();


// load mongoose and connect to a database
var mongoose = require('mongoose');

// Require controllers.
var usersController = require('../controllers/users');
var adminController = require('../controllers/admin');

router.use(function(req, res, next) {
  var userObj = new Buffer(req.headers['authorization'].slice(7).split('.')[1], 'base64');
  userObj = userObj.toString('ascii');
  req.email = JSON.parse(userObj).email;

console.log('req.email: ' + req.email)

  next();
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users', usersController.create);

router.get('/users', usersController.index);

router.get('/tote', usersController.getTote);
router.post('/tote', usersController.addToTote);

router.get('/products', adminController.allProducts);

router.post('/createProduct', adminController.createProduct);

router.get('/products/:type', adminController.productsByType);



module.exports = router;
