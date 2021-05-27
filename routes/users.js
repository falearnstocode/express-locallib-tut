var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You\'re standing in /users');
});

router.get('/users', function(req, res, next) {
  res.send('You\'re standing in /users/users');
});

router.get('/cool', function(req, res, next) {
  res.send('Hey man! You\'re standing in /users/cool. You\'re so cool');
});

module.exports = router;
