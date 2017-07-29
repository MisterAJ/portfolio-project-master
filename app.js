const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Routes
const mainController = require("./routes/main");
const quoteController = require("./routes/quotes");

app.use('/', mainController);
app.use('/quotes/', quoteController);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('public/scripts', express.static(path.join(__dirname, 'public/scripts')));
app.use('public/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;

    console.log(err.message);

    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const port = 3000;
// Start App
app.listen(port);
console.log("App running on port: " + port);


module.exports = app;