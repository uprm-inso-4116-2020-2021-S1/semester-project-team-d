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

    // Declare variables and query string.
    let genre_list = { 
            horror: [], 
            romance: [], 
            comedy: [], 
            drama: [],
            action: [],
            crime: [],
            fantasy: [],
            mystery: []
    }

    for (let genre in genre_list) { // Somehow the list is not iterated completely, the data in the last item on the list is not accessed
        // Generate a random number between [3, 5] 
        let random = Math.floor(Math.random() * (5 - 3 + 1) + 3),
            books = await getByGenre(genre);
       
        genre_list[genre] = books.slice(0, random);
        
    }
    return genre_list;
}
// getFromRandomGenres();
async function getFromRandomFaculties(){
    // Declare variables and query string.
    let faculty_list = {
        Engineering: [],
        Administration: [],
        "Arts and Science": [],
        "Agricutural Science": []
    }
    for (let faculty in faculty_list) { // Somehow the list is not iterated completely, the data in the last item on the list is not accessed
        // Generate a random number between [3, 5]
        let random = Math.floor(Math.random() * (5 - 3 + 1) + 3),
            books = await getByFaculty(faculty);

        faculty_list[faculty] = books.slice(0, random);
    }
    return faculty_list;
}
async function getFromRandomDepartments(){
    // Declare variables and query string.
    let department_list = {
        "Engineering Sciences and Materials":[],
        "Chemical Engineering":[],
        "Computer Science and Engineering":[],
        "Electrical Computer Engineering": [],
        "Civil Engineering and Surveying":[],
        "Mechanical Engineering":[],
        "Industrial Engineering":[],
        "Office Administration":[],
        Finance:[],
        Accounting:[],
        Statistics:[],
        Marketing:[],
        Entrepreneurship:[],
        "Information systems":[],
        Management:[],
        Chemestry:[],
        Physics:[],
        Biology:[],
        Nursing:[],
        Geology:[],
        Mathematics:[],
        "Social Science":[],
        Economy:[],
        "Hispanic Studies":[],
        Humanities:[],
        English:[],
        Psicology:[],
        "Industrial Biotechnology":[],
        "Animal Science":[],
        "Agro Environmental Sciences":[],
        "Agricultural Economics and Rural Sociology":[],
        "Agricultural Education":[],
        "Agricultural Engineering and Biosystems":[]
    }
    for (let department in department_list) { // Somehow the list is not iterated completely, the data in the last item on the list is not accessed
        // Generate a random number between [3, 5]
        let random = Math.floor(Math.random() * (5 - 3 + 1) + 3),
            books = await getByDepartment(department);
        
        department_list[department] = books.slice(0, random);
        
    }
    return department_list;
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