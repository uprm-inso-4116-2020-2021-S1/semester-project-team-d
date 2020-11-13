var express = require('express');
var router = express.Router();

const bookRepository = require('../application_layer/book-repository')

router.get('/landing', bookRepository.getLandingPageBooks);
router.get('/home', bookRepository.getHomePageBooks);
router.get('/search', bookRepository.searchForBook);
router.get('/book', bookRepository.getSpecificBook);
router.get('/browse', bookRepository.getBookCollections);

router.post('/add', bookRepository.addBook)

module.exports = router;