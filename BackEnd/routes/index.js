var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //rendders index file from the views folder
  res.render('index', { title: 'Express' });
});

module.exports = router;
