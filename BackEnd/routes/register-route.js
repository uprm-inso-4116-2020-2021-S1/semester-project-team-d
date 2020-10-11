var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')

const userDAO  = require('../database/userDAO')

router.post('/', async function (req, res){

    let user = {
        full_name: "John Travolta",
        password: "pulpfiction223",
        email: "jtravolta.sins@brazzers.com",
        username: "johnnysins223",
        phone: "6238402796"
    };

    console.log(req.body);

    // let user = req.body,
    let full_name = user.full_name.split(" ");

    // split into first_name and last_name
    let first_name = full_name[0],
        last_name = full_name.slice(1).join(" ");

    // Remove old property and add new ones.
    delete user.full_name;
    user.first_name = first_name;
    user.last_name = last_name;

    // Register user in database.
    let code = await userDAO.registerUser(user);
    console.log(code)
    res.send(JSON.stringify({exit_code: code}));
});

module.exports = router;