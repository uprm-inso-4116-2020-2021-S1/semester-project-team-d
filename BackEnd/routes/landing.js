var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('<title>Main</title><h1>This is the main page</h1>');
  });

module.exports = router;