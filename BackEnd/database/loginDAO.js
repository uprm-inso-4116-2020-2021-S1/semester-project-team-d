const client = require('./DB-Client')

function getUser(username){

    // Connect to DB. Returns a Promise object.
    client.connect()
        .then(() => {
            console.log("Successfully connected to the Database!");
        })
        .catch(err => {
            console.log(err);
        }); 
    
    // Declare variables for result and query object.
    let result,
        query = {
            text: "",
            values: [username]
        };

    // Execute Query. Returns a Promise object.
    client.query(query)
        .then(user => {
            // User was found.
            result = user;
        })
        .catch(() => {
            //User does not exist.
            result = null;
        })
        .then(() => {
            // Close connection when done.
            client.end();
        })
    
    return result;
}

module.exports = getUser;