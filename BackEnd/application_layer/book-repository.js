const BookFactory = require('../domain_layer/factories/book-factory');

// Must use the 'await' keyword to correctly use these functions.
const bookDAO = require('../infrastructure/bookDAO');
const userDAO = require('../infrastructure/userDAO');

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
    let book = await bookDAO.getBook("bookID", req.query.id);
    // Get from book table where bookID matches the one passed as route parameter.
    res.send(book);
}

async function searchForBook(req, res) {
    res.send({test: "passed"});
}

// Receives book info & UUID as request body.
async function addBook(req, res) {
    let uuid = req.body.uuid;
    delete req.body["uuid"];

    let book = BookFactory.createBook(req.body);

    await bookDAO.addBook(book);
    await userDAO.addBooktoListings(book.bookID, uuid)

    res.send({test: book});
}

async function getLandingPageBooks(req, res) {
    let books = {
        best_sellers: await bookDAO.getBestSellers(),
        best_of_month: await bookDAO.getBestOfTheMonth()
    }

    // Uses getBestSellers() & getBestOfTheMonth()
    res.send(books);
}

async function getHomePageBooks(req, res) {
    let books = [
        await bookDAO.getFromRandomGenres(),
        await bookDAO.getFromRandomFaculties(),
        await bookDAO.getFromRandomDepartments()
    ]

    res.send(books);
}

// Need to parse collection parameter from req
async function getBookCollections(req, res) {
    let books = { }

    switch(req.query.collection){
        case "genre":
            books = await bookDAO.getAllGenres();
            break;

        case "faculty":
            books = await bookDAO.getAllFaculties();
            break;

        case "department":
            books = await bookDAO.getAllDepartments();
            break;
    }

    res.send(books);
}

module.exports = {
    getSpecificBook,
    searchForBook,
    addBook,
    getLandingPageBooks,
    getHomePageBooks,
    getBookCollections
}