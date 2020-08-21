const express = require('express');
// const mongoose = require('mongoose'); 
const morgan = require('morgan');

const blogRoutes = require('./routes/blogRoutes');
 
// express app
const app = express(); 
// database
require("./config/db");

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// connect to mongodb & listen for requests
// const dbURI = process.env.DB_CONNECTION;

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(result => app.listen(process.env.PORT))
//   .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});



// routes
app.get('/', (req, res) => {
  console.log(process.env.DB_CONNECTION);
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});