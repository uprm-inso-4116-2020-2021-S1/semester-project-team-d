var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<title>Register</title><h1>This is the register page<h1>');
});

module.exports = router;