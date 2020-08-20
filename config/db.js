const mongoose = require('mongoose');

const dbURI = process.env.DB_CONNECTION;

//Connection establishment
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true
});
//Models
// require('../model/user');
const db = mongoose.connection;

//We enebled the Listener
db.on('error', () => {
    console.error('Error occured in db connection');
});

db.on('open', () => {
    console.log('DB Connection established successfully');
}); 

db.on('disconnected', function () {
    console.log(`MongoDB :: disconnected ${this.name}`);
});

// module.exports = db;