const client = require('./DB-Client')

async function getUser(credential, type){    

    // Connect to DB. Returns a Promise object.
    client.connect()
        .catch(err => {
            console.log(err);
        }); 
    
    // Declare variables for result and query string.
    let user,
        query = `SELECT * FROM public.user WHERE ${type} = '${credential}'`;

    // Execute Query. Returns a Promise object.
    return client.query(query)
        .then(result => {
            // User was found.
            user = result.rows[0];
        })
        .catch(err => {
            // Some error happened.
            console.log(`${err}\n`);
        })
        .then(() => {
            // Close connection when done.
            return user;
        });
}

module.exports = getUser;