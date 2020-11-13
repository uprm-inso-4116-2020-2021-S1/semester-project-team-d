const Book = require('./book')

class AcademicBook extends Book {
    constructor(id, title, author, faculty, department, courseID, edition){
        super(id, title, author, "academic")
        this.faculty = faculty;
        this.department = department;
        this.courseID = courseID;
        this.edition = edition;
    }
}

module.exports = AcademicBook;