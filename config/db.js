const mongoose = require('mongoose');
const DB_URL = process.env.DB_CONNECTION;

// Connect
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true});
// Successful connection
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + DB_URL);
})
// Connection exception
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error ' + err);
})
// Connection disconnect
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected ');
})

module.exports = mongoose;