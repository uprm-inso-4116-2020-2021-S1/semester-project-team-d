var express = require('express');
var router = express.Router();

// Must use the 'await' keyword to correctly use these functions.
const bookDAO = require('../infrastructure/bookDAO');
// const { addBookToListings } = require('../infrastructure/userDAO');

// Route handler for book carousels.
router.get('/', async (req, res) => {
    // Uses getFromRandomGenres(), 
    // getFromRandomFaculties(), & 
    // getFromRandomDepartments() from BookDAO.
})

// Route handler for book post component.
router.post('/', async (req, res) => {
    // Uses addBook(book) from BookDAO, &
    // addBookToListings(userID, bookID) from userDAO
})

// Route handler for search bar.
router.get('/search', async (req, res) => {
    // TBD
})

module.exports = router;