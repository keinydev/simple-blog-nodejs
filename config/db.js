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

db.on('error', function (error) {
    console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
    db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
});

db.on('connected', function () {
    mongoose.set('debug', function (col, method, query, doc) {
        console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
    });
    console.log(`MongoDB :: connected ${this.name}`);
});

db.on('disconnected', function () {
    console.log(`MongoDB :: disconnected ${this.name}`);
});

// module.exports = db;