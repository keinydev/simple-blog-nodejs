const mongoose = require('mongoose');

// const dbURI = process.env.DB_CONNECTION;

// //Connection establishment
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// //Models
// // require('../model/user');
// const connectDB = mongoose.connection;

// //We enebled the Listener
// connectDB.on('error', () => {
//     console.error('Error occured in db connection');
// });

// connectDB.on('open', () => {
//     console.log('DB Connection established successfully');
// }); 

const connectDB = async () => {
  try{
    const dbURI = process.env.DB_CONNECTION;
    // console.log(dbURI);
    const conect = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,      
    })
    
    const db = mongoose.connection;

    //We enebled the Listener
    db.on('error', () => {
        console.error('Error occured in db connection');
    });

    db.on('open', () => {
        console.log('DB Connection established successfully');
    }); 
    
    console.log(`MongoDB Connected: ${conect.connection.host}`)

  } catch (err){
    // console.error(err)
    console.error("is nor possible to connect")
    process.exit(1)    
  }
}

module.exports = connectDB; 