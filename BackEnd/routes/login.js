var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var router = express.Router();

// ROUTING
//display our login.html file to the client
router.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname + '/login.html'));
    res.send('<title>Login</title><h1>This is the login page<h1>');
});

router.post('/', (req, res, next) =>{
    res.json({Post: 'recieved'})
    console.log(res.json.Post)
})


// //LOGIN MEHTODS
// //Connect to database
// var connection = mysql.createConnection({
//  host     : 'localhost',
//  user     : 'root',
//  password : '',
//  database : 'nodelogin'
// });

// //sessions package is what we use to determine if the user is logged-in
// app.use(session({
//  secret: 'secret',
//  resave: true,
//  saveUninitialized: true
// }));

// //bodyParser package will extract the form data from our login.html file.
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// //client enters info and the form data will be sent to the server
// //will check in our MySQL accounts table to see if the details are correct
// app.post('/auth', function(request, response) {
//  var username = request.body.username;
//  var password = request.body.password;
//  if (username && password) {
//      connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
//          if (results.length > 0) {
//              request.session.loggedin = true;
//              request.session.username = username;
//              response.redirect('/home');
//          } else {
//              response.send('Incorrect Username and/or Password!');
//          }
//          response.end();
//      });
//  } else {
//      response.send('Please enter Username and Password!');
//      response.end();
//  }
// });

// //The client logs in successfully
// app.get('/home', function(request, response) {
//  if (request.session.loggedin) {
//      response.send('Welcome back, ' + request.session.username + '!');
//  } else {
//      response.send('Please login to view this page!');
//  }
//  response.end();
// });

module.exports = router;
