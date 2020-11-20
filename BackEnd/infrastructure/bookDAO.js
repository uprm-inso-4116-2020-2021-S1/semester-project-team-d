const { log } = require('debug');
const DB_Client = require('./DB-Client')

/*
  All functions follow a basic paradigm:
  1- Establish connection with DB client.
  2- Declare variables to store results and initialize query.
  3- Execute query with DB client and return result.
    a- Result will be a promise, hence need to resolve.
    b- chain .then().catch().then() on result
    c- first .then() resolves result on success,
        .catch() resolves unsuccessful promise,
        on last .then(), close DB connection and return result
*/

// To use at Landing Route
async function getBestSellers(){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let best_sellers,
        query = `SELECT * FROM public.book WHERE "best_seller" = '1'`;

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            best_sellers = result.rows;
        })
        .catch(error => {
            console.log(error)
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            // return result;
            return best_sellers;
        });    
}

async function getBestOfTheMonth(){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let best_of_month,
        query = `SELECT * FROM public.book WHERE "best_of_month" = '1'`;

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            best_of_month = result.rows;
        })
        .catch(error => {   
            console.log(error);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            // return result;
            return best_of_month;
        });
}

// To use at Home Route
async function getFromRandomGenres(){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let genre_list = [],
        query = `SELECT DISTINCT "genre" FROM public.book WHERE "genre" IS NOT NULL`;

    return conn.query(query)
        .then(async result => {   
            rows = result.rows
            for(let row in rows){
                // Generate a random number between [3, 5] 
                let random = Math.floor(Math.random() * (5 - 3 + 1) + 3),
                    genre = await getByGenre(rows[row].genre)

                genre_list.push(genre.slice(0, random))
            }
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            conn.end();
            genre_list = [].concat.apply([], genre_list);
            // Shuffle list.
            return genre_list;
        })
}

// getFromRandomGenres();
async function getFromRandomFaculties(){
    // Establish DB Connection 
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let faculty_list = [],
        query = `SELECT DISTINCT "faculty" FROM public.book WHERE "faculty" IS NOT NULL`;

    return conn.query(query)
        .then(async result => {
            rows = result.rows
            for(let row in rows){
                // Generate a random number between [3, 5] 
                let random = Math.floor(Math.random() * (5 - 3 + 1) + 3),
                    faculty = await getByFaculty(rows[row].faculty)

                faculty_list.push(faculty.slice(0, random))
            }
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            conn.end();
            faculty_list = [].concat.apply([], faculty_list);
            // Shuffle list.
            return faculty_list
        })
}

async function getFromRandomDepartments(){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let department_list = [],
        query = `SELECT DISTINCT "department" FROM public.book WHERE "department" IS NOT NULL`;

    return conn.query(query)
        .then(async result => {
            rows = result.rows
            for(let row in rows){
                // Generate a random number between [3, 5] 
                let random = Math.floor(Math.random() * (5 - 3 + 1) + 3),
                    department = await getByDepartment(rows[row].department)

                department_list.push(department.slice(0, random))
            }
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            conn.end();
            department_list = [].concat.apply([], department_list);
            // Shuffle list.
            return department_list
        })
}

async function getAllGenres() {
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    let genres = {},
        query = `SELECT DISTINCT "genre" FROM public.book WHERE "genre" IS NOT NULL`;

    return conn.query(query)
        .then(async result => {

            rows = result.rows
            for(let row in rows) {    
                genre = rows[row].genre
                genres[genre] = await getByGenre(genre);
            }
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            conn.end();
            return genres;
        })
}

async function getAllFaculties() {
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    let faculties = {},
        query = `SELECT DISTINCT "faculty" FROM public.book WHERE "faculty" IS NOT NULL`;

    return conn.query(query)
        .then(async result => {

            rows = result.rows
            for(let row in rows) {    
                faculty = rows[row].faculty
                faculties[faculty] = await getByFaculty(faculty);
            }
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            conn.end();
            return faculties;
        })
}

async function getAllDepartments() {
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    let departments = {},
        query = `SELECT DISTINCT "department" FROM public.book WHERE "department" IS NOT NULL`;

    return conn.query(query)
        .then(async result => {

            rows = result.rows
            for(let row in rows) {    
                department = rows[row].department
                departments[department] = await getByDepartment(department);
            }
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            conn.end();
            return departments;
        })
}

// To use at Browse Books Route
async function getByGenre(genre){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let books, query = `SELECT * FROM public.book WHERE genre = '${genre}' ORDER BY RANDOM()`;


    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            books = result.rows;
        })
        .catch(error => {
            console.log(err);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            return books;
        });
}

async function getByDepartment(dept){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let department_list, query = `SELECT * FROM public.book WHERE department = '${dept}' ORDER BY RANDOM()`;


    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            //put query results in a list
            department_list = result.rows
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            // Close connection.
            conn.end();
            //return depList
            return department_list;
        });
}

async function getByFaculty(faculty){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let faculty_list, query = `SELECT * FROM public.book WHERE faculty = '${faculty}' ORDER BY RANDOM()`;

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            faculty_list = result.rows
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            
            return faculty_list;
            // return facList
        });
}

// To use elsewhere (TBD)
async function getBook(criteria, target){    
    let conn = DB_Client.establishConnection();

    // Declare variables for result and query string.
    let book,
        query = `SELECT * FROM public.book WHERE "${criteria}" = '${target}'`;

    // Execute Query. Returns a Promise object.
    return conn.query(query)
        .then(result => {
            // User was found.
            book = result.rows[0];
        })
        .catch(err => {
            // Some error happened.
            console.log(err);
        })
        .then(() => {
            // Promise is resolved. 
            // Close DB connection and return user.
            conn.end()
            return book;
        });
}

async function addBook(book) {
    let column_names = "", row = "";

    for(let key in book) {
        column_names += `"${key}",`
        row += `'${book[key]}',`
    }
    column_names = column_names.slice(0, column_names.length -1);
    row = row.slice(0, row.length -1);

    // Establish connection with DB.
    let conn = DB_Client.establishConnection()

    // Declare variables for exit code and query string.
    let exit_code, query = `INSERT INTO public.book (${column_names}) VALUES (${row})`;
            
    return conn.query(query)
        .then(() => {
            exit_code = 0;
        })
        .catch(err => {
            console.log(err);
            exit_code = -1;
        })
        .then(() => {
            // Promise is resolved. Close connection and return exit code.
            conn.end();
            return exit_code;
        })
}

module.exports = {
    getBestSellers,
    getBestOfTheMonth,
    getAllGenres,
    getAllFaculties,
    getAllDepartments,
    getFromRandomGenres,
    getFromRandomFaculties,
    getFromRandomDepartments,
    getBook,
    addBook
};