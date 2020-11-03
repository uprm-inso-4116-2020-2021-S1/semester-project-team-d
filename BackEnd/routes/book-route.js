var express = require('express');
var router = express.Router();

// Must use the 'await' keyword to correctly use these functions.
const { getBook } = require('../infrastructure/bookDAO');

// Asynchronous Wrapper functions.
function getByTitle(title) {
    return getBook(title, "title");
}

function getByCourseID(courseID) {
    return getBook(courseID, "courseID");
}

/* Define more wrapper functions as needed. */

// Need to establish route format with corresponding flags.
router.get('/', async (req, res) => {
    // Use wrapper functions accordingly.
})

module.exports = router;