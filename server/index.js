var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const db = require('../database/index')
const PORT = process.env.PORT || 5000;

var index = require('./routes/index');
var users = require('./routes/users');
const API = require('./routes/API/youTube');

//sample data routes
var ALLVIDEOS = require('../data/youTubeAllVideoResponse');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/API/', API);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.get('/getUserToken:id', function(req, res, next) {
    //reach out to joe's oauth app
    //return user token string
    //on port ;;4444
})
app.get('/allvideos/:token', function(req, res, next) {
        //reach out to videos db app.
        //on port 4445
        //sends back json of needed info
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
app.listen(PORT, function() {
    console.log(`Listening on  ${ PORT }`)
});

app.get('/videodatabase/addVideo', function(req, res, next) {
    let videoData = req.param;
    db.query(`INSERT INTO users (username, google_auth) VALUES ('Sonic', 'A8BC0293DD')`, function cb(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log('Yay it worked');
        }
    }); 
    res.status(err.status || 500);
    res.end(); 
});

module.exports = app;