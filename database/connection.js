let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blog');

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});