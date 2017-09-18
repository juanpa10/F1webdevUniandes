var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var drivers = require('./routes/drivers');
var stats = require('./routes/stats');
var teams = require('./routes/teams');
var circuits = require('./routes/circuits');
var fan = require('./routes/fanZone');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'front/build')));

app.use('/', index);


app.use('/driversinfo', drivers);
app.use('/statsinfo', stats);
app.use('/teamsinfo', teams);
app.use('/circuitInfo', circuits);

app.use('/fans', fan);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  //next(err);
  res.sendFile(path.resolve(__dirname, 'front/build', 'index.html'));
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
