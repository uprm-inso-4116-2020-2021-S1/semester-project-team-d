const Book = require('./book')

class RecreationalBook extends Book {
    constructor(id, title, author, volume, genre){
        super(id, title, author, "recreational");
        this.volume = volume;
        this.genre = genre;
    }
}

module.exports = RecreationalBook;