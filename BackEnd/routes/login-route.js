var express = require('express');
var router = express.Router();
var session = require('express-session')
var parser = require('body-parser')

const userDAO  = require('../database/userDAO')

// Asynchronous wrapper functions.
async function getByUsername(username) {
  return await userDAO.getUser(username, "username")
}

async function getByEmail(email) {
  return await userDAO.getUser(email, "email")
}

/* GET users listing. */
router.get('/', async function(req, res) {

  let json_string = `{"credential":"pepe.quintana@cfm.farru", "password":"carbonfibermusic123"}`
  
  // Request will be a JSON with fields 'credential' && 'password'.
  let login = JSON.parse(json_string), // req.body instead of json_string
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
    res.send(JSON.stringify({"return_code": -1}))
    return
  }

  // If user[password] == req[password] then res returns 0. (Passwords match)
  if(user["password"] === login["password"])
    res.send(JSON.stringify({"return_code": 0}))

  // Else then res returns -2. (Unsuccesful validation)
  else
    res.send(JSON.stringify({"return_code": -2}))
    
});

//sessions package is what we use to determine if the user is logged-in
router.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
 }));

 router.use(parser.json())
 
//client enters info and the form data will be sent to the server
//will check in our MySQL accounts table to see if the details are correct
router.post('/', (req, res) => {
  const data = req.body;
  var username = data.credential;
  var password = data.password;
  let user;
  if (username && password) {
    if(username.includes('@')){
      user = await getByEmail(username)
      req.session.loggedin = true;
      req.session.username = username;
      res.send(200); 
    }
    else{
      user = await getByUsername(username)
      req.session.loggedin = true;
      req.session.username = username;
      res.send(200);
    }
  }
  if(!user){
    res.send(500)
  }

  // If user[password] == req[password] then res returns 0. (Passwords match)
  if(user["password"] === login["password"])
    res.send(200)

  // Else then res returns -2. (Unsuccesful validation)
  else
    res.send(500)
});
 
 //The client logs in successfully
 router.get('./home', (request, response) => {
  if (request.session.loggedin) {
      response.send('Welcome back, ' + request.session.username + '!');
  } else {
      response.send('Please login to view this page!');
  }
  response.end();
 });


// setTimeout(()=> {
//   console.log(user)
// }, 3000);

module.exports = router;
