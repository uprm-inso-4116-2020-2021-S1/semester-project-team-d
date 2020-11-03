var express = require('express');
var router = express.Router();

// Must use the 'await' keyword to correctly use these functions.
const { getOrders } = require('../infrastructure/ordersDAO');
const { updateInfo, getListings, getHoldings } = require('../infrastructure/userDAO');


// Returns users orders, listings, and holdings.
router.get('/', async (req, res) => {
    // Uses getOrders(userID), getHoldings(userID), & getListings(userID)
})

router.post('/', async(req, res) => {
    // Uses updateInfo()
})

module.exports = router;