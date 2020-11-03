var express = require('express');
var router = express.Router();

// Must use the 'await' keyword to correctly use these functions.
const { getByGenre, getByFaculty, getByDepartment } = require('../infrastructure/bookDAO');

// Route handler for book carousels.
router.get('/genres', async (req, res) => {
    // Uses getByGenre()
})

router.get('/faculties', async (req, res) => {
    // Uses getByFaculty()
})

router.get('/departments', async (req, res) => {
    // Uses getByDepartment()
})

module.exports = router;