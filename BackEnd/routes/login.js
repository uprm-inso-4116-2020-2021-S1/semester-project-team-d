var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.send('<p>LOGIN HERE</p>');
});

module.exports = router;
