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

function establishConnection() {
    // This is to avoid a 'DEPTH_ZERO_SELF_SIGNED_CERT' error when connecting to DB.
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

    // Initialize the DB client and return. 
    return new Pool(database);
}

module.exports = {
    establishConnection: establishConnection
} 