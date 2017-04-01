var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(bodyParser.json());

require('./database/connection');
let rest = require('./rest');

app.use('/api', rest);

app.listen(8080);