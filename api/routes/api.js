var express = require('express');
var router = express.Router();


// load mongoose and connect to a database
var mongoose = require('mongoose');

// Require controllers.
var usersController = require('../controllers/users');
var adminController = require('../controllers/admin');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users', usersController.create);

router.get('/users', usersController.index);

router.get('/tote', usersController.addToTote);
router.post('/tote', usersController.addToTote);

router.get('/products', adminController.allProducts);

router.post('/createProduct', adminController.createProduct);

router.get('/products/:type', adminController.productsByType);



module.exports = router;
