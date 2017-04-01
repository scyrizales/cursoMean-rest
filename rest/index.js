let express = require('express');
let rest = express();
let autorRest = require('./autorRest');

rest.use('/autor', autorRest);

module.exports = rest;