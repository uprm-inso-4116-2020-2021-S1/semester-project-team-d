var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var cors = require('cors')
var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');

var landingPageRouter = require('./routes/landing-route');
var loginPageRouter = require('./routes/login-route');
var registerPageRouter = require('./routes/register-route');

var homePageRouter = require('./routes/home-route');
var browseBooksRouter = require('./routes/browse-books-route');
var booksRouter = require('./routes/book-route');

var accountPageRouter = require('./routes/account-route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit:'1mb'}));

app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', landingPageRouter);
app.use('/login', loginPageRouter);
app.use('/register', registerPageRouter);

app.use('/home', homePageRouter);
app.use('/browse', browseBooksRouter);
app.use('/book', booksRouter);

app.use('/account', accountPageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
