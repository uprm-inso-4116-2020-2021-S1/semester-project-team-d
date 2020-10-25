var express = require('express');
var router = express.Router();
var session = require('express-session')

const userDAO  = require('../infrastructure/userDAO')

// Asynchronous wrapper functions.
async function getByUsername(username) {
  return await userDAO.getUser(username, "username")
}

async function getByEmail(email) {
  return await userDAO.getUser(email, "email")
}

/* GET users listing. */
router.post('/', async function(req, res) {
  
  // Request will be a JSON with fields 'credential' && 'password'.
  let login = req.body, 
      user;

  // If credential has '@' then getByEmail(credential)
  let credential = login["credential"];
  if (credential.includes("@"))
    user = await getByEmail(credential);

  // Else then getByUsername(credential).
  else
    user = await getByUsername(credential);
    
  // If 'user' is null then res returns -1. (User doesn't exist)
  if(!user){
    res.send({exit_code: -1})
    return
  }

  // If user[password] == req[password] then res returns 0. (Passwords match)
  if(user["password"] === login["password"])
    res.send({exit_code: 0});

  // Else then res returns -2. (Unsuccesful validation)
  else
    res.send({exit_code: -2})
    
});

//sessions package is what we use to determine if the user is logged-in
// router.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true
//  }));
 

//* Method look good
// TODO: Verify JSON request variable names & refactor in order to use sql methods from db module
//client enters info and the form data will be sent to the server
//will check in our MySQL accounts table to see if the details are correct
// router.post('/auth', (req, res) => {
//   var username = req.body.username;
//   var password = req.body.password;
//   if (username && password) {
//       connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
//           if (results.length > 0) {
//               req.session.loggedin = true;
//               req.session.username = username;
//               res.redirect('/home');
//           } else {
//               res.send('Incorrect Username and/or Password!');
//           }
//           res.end();
//       });
//   } else {
//       res.send('Please enter Username and Password!');
//       res.end();
//   }
//  });
 
//  //The client logs in successfully
//  router.get('./home', (request, response) => {
//   if (request.session.loggedin) {
//       response.send('Welcome back, ' + request.session.username + '!');
//   } else {
//       response.send('Please login to view this page!');
//   }
//   response.end();
//  });

 
// setTimeout(()=> {
//   console.log(user)
// }, 3000);

module.exports = router;
