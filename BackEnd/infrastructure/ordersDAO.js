const DB_Client = require('./DB-Client')

async function getOrders(userID){
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
    getOrders
}