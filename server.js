const express = require('express');
const mongoose = require('mongoose'); 
const morgan = require('morgan');
require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
 
// express app
const app = express(); 

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


// general routes
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

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});