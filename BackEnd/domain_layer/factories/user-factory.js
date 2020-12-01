const User = require('../entities/user');

function createUser(user_param) {
    let full_name = user_param.full_name.split(" ");

    // split into first_name and last_name
    let first_name = full_name[0],
        last_name = full_name.slice(1).join(" ");

    let user = new User(
        generateID(),
        first_name,
        last_name,
        user_param.username,
        user_param.email,
        user_param.password,
        user_param.phone
    );

    return user;
}

function generateID() {
    // Generate a random number between [0, 1000]
    lower = 1000, upper = 9999;

    return (Math.floor((Math.random() * (upper-lower + 1) + lower)));
}

module.exports = {
    createUser
} 