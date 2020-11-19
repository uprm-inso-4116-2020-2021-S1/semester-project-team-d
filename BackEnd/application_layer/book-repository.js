const BookFactory = require('../domain_layer/factories/book-factory');

// Must use the 'await' keyword to correctly use these functions.
const { getBook } = require('../infrastructure/bookDAO');

// Asynchronous Wrapper functions.
function getByTitle(title) {
    return getBook(title, "title");
}

function getByCourseID(courseID) {
    return getBook(courseID, "courseID");
}

/************************** Repository functions. **************************/

// Needs to parse bookID parameter from req
async function getSpecificBook(req, res) {
    // Get from book table where bookID matches the one passed as route parameter.
    res.send({test: "passed"});
}

async function searchForBook(req, res) {
    res.send({test: "passed"});
}

// Receives book info & UUID as request body.
async function addBook(req, res) {
    let book = BookFactory.createBook(req.body);
    
    //Create book, add to book table, get user with uuid, update his listings with new bookID.
    res.send({test: book});
}

async function getLandingPageBooks(req, res) {
    // Uses getBestSellers() & getBestOfTheMonth()
    res.send({test: "passed"});
}

async function getHomePageBooks(req, res) {
    // var result = [
    //     getFromRandomGenres(),
    //     getFromRandomFaculties(),
    //     getFromRandomDepartments()
    // ]

    // res.send(result);
}

// Need to parse collection parameter from req
async function getBookCollections(req, res) {
    // If collection parameter is "genres" -> getByGenre()
    // If collection parameter is "department" -> getByDepartment()
    // If collection parameter is "faculty" -> getByFaculties()
    res.send({test: "passed"});
}

module.exports = {
    getSpecificBook,
    searchForBook,
    addBook,
    getLandingPageBooks,
    getHomePageBooks,
    getBookCollections
}