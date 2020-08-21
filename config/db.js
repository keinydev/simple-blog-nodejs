const mongoose = require('mongoose');
const DB_URL = process.env.DB_CONNECTION;

// Connect
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err));
 