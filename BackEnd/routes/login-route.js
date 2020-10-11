var express = require('express');
var router = express.Router();

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
  let login = JSON.parse(json_string), // req instead of json_string
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

// setTimeout(()=> {
//   console.log(user)
// }, 3000);

module.exports = router;
