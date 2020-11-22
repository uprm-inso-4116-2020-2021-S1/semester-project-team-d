const DB_Client = require('./DB-Client')
const { getBook } = require('./bookDAO');
const e = require('express');

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
async function getListings(uuid) {
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let values, listings, query = `SELECT listings FROM public.user WHERE "userID" = '${uuid}'`;
    
    // Execute query and return result.
    await conn.query(query)
        .then(result => {
            //put query results in a list
            values = result.rows[0].listings
        })
        .catch(error => {
            console.log(error);
        })

    query = `SELECT * FROM public.book WHERE "bookID" IN (${values})`;
    
    if(values.length == 0)
        return []

    else {
        return conn.query(query)
        .then(result => {
            listings = result.rows;
        })
        .catch(error => {
            console.log(error)
        })
        .then(() => {
            // Close connection 
            conn.end();

            // return result;            
            return listings;
        });
    }
}

// Fetch list of BookIDs from the 'holdings' property of userID
// Fetch every book in that list with getBook() from bookDAO
// Return list of books.
async function getHoldings(uuid) {
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let values, holdings, query = `SELECT holdings FROM public.user WHERE "userID" = '${uuid}'`;

    await conn.query(query)
        .then(result => {
            values = result.rows[0].holdings;
        })
        .catch(error => {
            console.log(error)
        })

    query = `SELECT * FROM public.book WHERE "bookID" IN (${values})`;
 
    // Execute query and return result.
    if (values.length == 0)
        return [];

    else {
        return conn.query(query)
        .then(result => {
            holdings = result.rows;
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            conn.end();
            return holdings;
        })
    }
}

async function getOrders(uuid) {
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let values, orders, query = `SELECT orders FROM public.user WHERE "userID" = '${uuid}'`;

    await conn.query(query)
        .then(result => {
            values = result.rows[0].orders
        })
        .catch(error => {
            console.log(error);
        })

    query = `SELECT * FROM public.order WHERE "orderID" IN (${values})`
    if (values.length == 0)
        return [];

    else {
        // Execute query and return result.
        return conn.query(query)
        .then(result => {
            orders = result.rows;
        })
        .catch(error => {
            console.log(error)
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            return orders;
        });
    }
}

// Add bookID to the list in 'listings' property of userID
async function addBooktoListings(bookID, userID) {
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let listings,
        query = `SELECT "listings" FROM public.user WHERE "userID" = '${userID}'`;

    // Execute query and return result.
    await conn.query(query)
        .then(result => {
            listings = result.rows[0].listings;
            listings.push(bookID);
        })
        .catch(error => {
            console.log(error);
        })
    
    query = `UPDATE public.user SET "listings"='{${listings}}' WHERE "userID" = '${userID}'`;
    await conn.query(query)
        .then(() => {
            // console.log("success");
        })
        .catch(err => {
            console.log(err);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            // return ;
        });
}

module.exports = {
    getUser,
    registerUser,
    updateInfo,
    getListings,
    getHoldings,
    getOrders,
    addBooktoListings
};
