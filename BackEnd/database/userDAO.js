const client = require('./DB-Client')

async function getUser(credential, type){    
    
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
            console.log(err);
        })
        .then(() => {
            // Promise is resolved.
            return user;
        });
}

async function registerUser(user) {

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
            '${generateID()}',
            '${user.first_name}',
            '${user.last_name}',
            '${user.password}',
            '${user.email}',
            '${user.username}',
            '${user.phone}')`;

    return client.query(query)
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
                    // Some other error happened.
                    console.log(err);
                    break;
            }
        })
        .then(() => {
            // Promise is resolved.
            // console.log(exit_code);
            return exit_code;
        })
}

function generateID() {
    // Generate a random number between [0, 1000]
    return(Math.floor((Math.random() * 1000) + 1));
}

module.exports = {
    getUser: getUser,
    registerUser: registerUser
};
