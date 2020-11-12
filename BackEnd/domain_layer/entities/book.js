class Book {
    // Need picture property.
    constructor(id, title, author, type) {
        this.bookID = id;
        this.title = title;
        this.author = author;
        this.type = type;
    }
}

module.exports = Book;