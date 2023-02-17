var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var timestampRouter = require('./routes/timestamp');

var app = express();

app.use(cors({optionsSuccessStatus: 200}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', timestampRouter);

module.exports = app;
