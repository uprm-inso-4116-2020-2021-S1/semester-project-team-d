var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<title>Home</title><h1>This is the register page</h1>');
});

module.exports = router;

