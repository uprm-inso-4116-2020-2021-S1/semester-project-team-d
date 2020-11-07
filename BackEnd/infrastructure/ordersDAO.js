const DB_Client = require('./DB-Client')

async function getOrders(userID){
    // Establish DB connection.
    let conn = DB_Client.establishConnection();

    // Declare variables and query string.
    let orders, query = `SELECT * FROM public.order WHERE orderID = '${userID}'`;

    // Execute query and return result.
    return conn.query(query)
        .then(result => {
            orders = result;
        })
        .catch(error => {
            console.log(error);
        })
        .then(() => {
            // Close connection and return result.
            conn.end();
            return orders;
            // return result;
        });
}

module.exports = {
    getOrders
}