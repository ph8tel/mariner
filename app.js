var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
//const PORT = 5000;

var index = require('./server/index');
var users = require('./routes/users');
const API = require('./routes/API/youTube');
let query = require('./routes/query');
const analysis = require('./routes/analysis');

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
app.use(cors());
// app.use('/', express.static(path.join(__dirname, 'client/dist')));

app.use('/', index);
app.use('/:name/:id', users);
app.use('/API/', API);
app.use('/query/', query);
app.use('/analysis', analysis);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
})
module.exports = app;