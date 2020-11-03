var express = require('express');
var router = express.Router();

// Must use the 'await' keyword to correctly use these functions.
const { getBestOfTheMonth, getBestSellers } = require('../infrastructure/bookDAO');

router.get('/', async (req, res) => {
    // Testing purposes. Delete when not needed.
    // res.send(JSON.stringify(await getBestSellers()))
})

module.exports = router;