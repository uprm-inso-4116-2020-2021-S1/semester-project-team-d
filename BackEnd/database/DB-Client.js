const { Client } = require('pg');

// Database information. Will change with time.
const database = {
    host: 'ec2-54-160-120-28.compute-1.amazonaws.com',
    database: 'dec11iugaj960i',
    port: 5432,
    user: 'wimokaggmsumgs',
    password: '48bb406c7a6fa598247bc13627b3ead45a357c717a5b9d6ab9bbf0591258631f',
    ssl: true
};

// This is to avoid a 'DEPTH_ZERO_SELF_SIGNED_CERT' error when connecting to DB.
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// Initialize the db client and export it as a module.
let client = new Client(database);
module.exports = client;