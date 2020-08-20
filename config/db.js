// database.js
const mongoose = require("mongoose");  
const dbPath = process.env.DB_CONNECTION;
mongoose.connect(dbPath, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(result => app.listen(process.env.PORT))
//   .catch(err => console.log(err));


const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;