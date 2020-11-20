const Book = require('../entities/book');
const AcademicBook = require('../entities/academic-book');
const RecreationalBook = require('../entities/recreational-book');

function createBook(book_param) {
    book: Book;

    if(book_param.type == "academic"){
        book = new AcademicBook(
            generateID("ACAD"),
            book_param.title,
            book_param.author,
            book_param.faculty,
            book_param.department,
            book_param.courseID,
            book_param.edition
        )
    } 
    
    else {
        book = new RecreationalBook(
            generateID("RECR"),
            book_param.title,
            book_param.author,
            book_param.volume,
            book_param.genre
        )
    }

    return book;
}

function generateID(type) {
    // Generate a random number between [1000, 9999]
    lower = 1000, upper = 9999;

    // return type + (Math.floor((Math.random() * (upper-lower + 1) + lower)));
    return (Math.floor((Math.random() * (upper-lower + 1) + lower)));
}

module.exports = {
    createBook,
}


// Testing purposes.
// new_book = {
//     title: "Test Book",
//     author: "Test Author",
//     type: "recreational",
//     volume: "Test Vol",
//     genre: "Test genre"
// }

// console.log(createBook(new_book))