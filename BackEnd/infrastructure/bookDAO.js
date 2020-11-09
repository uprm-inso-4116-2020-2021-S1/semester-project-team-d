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
    let query = "";

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            
        })
        .catch(error => {
            
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            // return result;
            return {"Hello": "world"};
        });    
}

async function getBestOfTheMonth(){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let query = "";

    // Execute query and return result.
    return conn.query(query)
        .then(result => {

        })
        .catch(error => {

        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            // return result;
            return {"Hello": "world"};
        });
}

// To use at Home Route
async function getFromRandomGenres(){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let genreList, books,query = "SELECT genre FROM public.book OFFSET floor(random() * (SELECT COUNT(*) FROM public.book))";

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            genreList = result.rows;
        })
        .catch(error => {
            console.log(err);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();

            for(var i = 0; i < genreList.length; i++) {
                // var obj = depList[i];
                books.push(getByGenre(genreList[i].title, 'title'));
            }
            return genreList;
            // return result;
        });
}

async function getFromRandomFaculties(){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let facList, faculties, query = "SELECT faculty FROM public.academic OFFSET floor(random() * (SELECT COUNT(*) FROM public.academic))";

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            facList = result.rows;
        })
        .catch(error => {
            console.log(err);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();

            for(var i = 0; i < facList.length; i++) {
                // var obj = depList[i];
                faculties.push(getByFaculty(facList[i].title, 'title'));
            }
            return facList;
            // return result;
        });
}

async function getFromRandomDepartments(){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let deptList, dept, query = "SELECT department FROM public.academic OFFSET floor(random() * (SELECT COUNT(*) FROM public.academic))";

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            deptList = result.rows;
        })
        .catch(error => {
            console.log(err);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();

            for(var i = 0; i < deptList.length; i++) {
                // var obj = depList[i];
                dept.push(getByDepartment(deptList[i].title, 'title'));
            }

            return deptList;
            // return result;
        });
}

// To use at Browse Books Route
async function getByGenre(genre){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let books,query = `SELECT * FROM public.book WHERE genre = '${genre}'`;

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            books = result
        })
        .catch(error => {
            console.log(err);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            return books
            // return result;
        });
}


async function getByDepartment(dept){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let listing, depList, query = `SELECT * FROM public.academic WHERE department = '${dept}'`;

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            //put query results in a list
            depList = result.rows
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            // Close connection.
            conn.end();

            //Iterate through list and find books accordingly, put result in list
            for(var i = 0; i < depList.length; i++) {
                var obj = depList[i];
                listing.push(getBook(obj.title, 'title'));
            }

            //return depList
            return listing
        });
}

async function getByFaculty(faculty){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let listing, facList, query = `SELECT * FROM public.academic WHERE faculty = '${faculty}'`;

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            facList = result.rows
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            
            for(var i = 0; i < facList.length; i++) {
                var obj = facList[i];
                listing.push(getBook(obj.title, 'title'));
            }
            return listing
            // return facList

        });
}


// To use elsewhere (TBD)
async function getBook(target, criteria){    
    let conn = DB_Client.establishConnection();

    // Declare variables for result and query string.
    let book,
        query = `SELECT * FROM public.book WHERE ${criteria} = '${target}'`;

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
    let conn = DB_Client.establishConnection()

    // Declare variables for exit code and query string.
    let exit_code, 
        query = `INSERT INTO public.user (
            "userID",
            "FirstName",
            "LastName",
            "password",
            "email",
            "username",
            "phone") depList (
            '${generateID()}',
            '${user.first_name}',
            '${user.last_name}',
            '${user.password}',
            '${user.email}',
            '${user.username}',
            '${user.phone}')`;
            
    return conn.query(query)
        .then(() => {
            // Successfully added new user.
            exit_code = 0;
        })
        .catch(err => {
            switch(err.constraint){
                case 'user_email_key':  
                    // Email already exists in database.
                    exit_code = -1;
                    break;

                case 'user_username_key':
                    // Username already exists in database.
                    exit_code = -2;
                    break;

                case 'user_phone_key':
                    // Phone number already exists in database.
                    exit_code = -3;
                    break;

                default: 
                    // Some other error happened. Arbitrary exit code of -4
                    exit_code = -4;
                    console.log(err);
                    break;
            }
        })
        .then(() => {
            // Promise is resolved. Close connection and return exit code.
            conn.end();
            // console.log(exit_code);
            return exit_code;
        })
}

// Ideally this should be a hashing function with linear probing to generate random IDs 
function generateID() {
    // Generate a random number between [0, 1000]
    return(Math.floor((Math.random() * 1000) + 1));
}

module.exports = {
    getBestSellers,
    getBestOfTheMonth,
    getByGenre,
    getByFaculty,
    getByDepartment,
    getFromRandomGenres,
    getFromRandomFaculties,
    getFromRandomDepartments,
    getBook,
    addBook
};

const p = async (myFunc) => {
    const a = await myFunc
    console.log(a);
}

p(getByDepartment())
