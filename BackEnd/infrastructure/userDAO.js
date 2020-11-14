const DB_Client = require('./DB-Client')
const { getBook } = require('./bookDAO')

async function getUser(credential, type){    
    let conn = DB_Client.establishConnection();

    // Declare variables for result and query string.
    let user,
        query = `SELECT * FROM public.user WHERE ${type} = '${credential}'`;

    // Execute Query. Returns a Promise object.
    return conn.query(query)
        .then(result => {
            // User was found.
            user = result.rows[0];
        })
        .catch(err => {
            // Some error happened.
            console.log(err);
        })
        .then(() => {
            // Promise is resolved. 
            // Close DB connection and return user.
            conn.end()
            return user;
        });
}

async function registerUser(user) {
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
            "phone") VALUES (
            '${user.userID}',
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

async function updateInfo() {
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
        });
}

// Fetch list of BookIDs from the 'listings' property of userID
// Fetch every book in that list with getBook() from bookDAO
// Return list of books.
/* 
    NOTE: WILL GIVE ERROR AS LONG AS LISTINGS ARE NULL. 
    TEST ONCE VALUES ARE INSERTED INTO LISTINGS
*/
async function getListings() {
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let values, listings, query = `SELECT listings FROM public.user`;
    
    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            
            //put query results in a list
            values = result.rows
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            // Close connection 
            conn.end();
            
            //Iterate through list and find books accordingly, put result in list
            for(var i = 0; i < values.length; i++) {
                var obj = values[i];
                listings.push(getBook(obj.listings.title));
            }           
            
            //return list
            return listings;
            // return result;
        });
}

// Fetch list of BookIDs from the 'holdings' property of userID
// Fetch every book in that list with getBook() from bookDAO
// Return list of books.
async function getHoldings(userID) {
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
        });
}

// Add bookID to the list in 'listings' property of userID
async function addBooktoListings(bookID, userID) {
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
        });
}

module.exports = {
    getUser,
    registerUser,
    updateInfo,
    getListings,
    getHoldings,
    addBooktoListings
};