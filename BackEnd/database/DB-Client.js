const { Pool } = require('pg');

// Database information. Will change with time.
const database = {
    host: 'ec2-52-3-4-232.compute-1.amazonaws.com',
    database: 'ddji61b18i22cb',
    port: 5432,
    user: 'ubrsrymzdzymso',
    password: '38b7e3fd3d7e19a1c8ab5643674db730f9615415f258f9677448655a80d629f3',
    ssl: true
};

// This is to avoid a 'DEPTH_ZERO_SELF_SIGNED_CERT' error when connecting to DB.
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// Initialize the db client and export it as a module.
let client = new Pool(database);


// This connect snippet is to test connection whenever the credentials change.
// client.connect()
// .then(() => {
//     console.log("Successfully connected to the Database!");
// })
// .catch(err => {
//     console.log(err);
// }); 

module.exports = client;