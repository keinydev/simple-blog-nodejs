// server.js
// where your node app starts

// init project
// const express = require('express');
// const app = express();

// // we've started you off with Express, 
// // but feel free to use whatever libs or frameworks you'd like through `package.json`.

// // http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// // http://expressjs.com/en/starter/basic-routing.html
// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// });

// // listen for requests :)
// const listener = app.listen(process.env.PORT, function() {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

const http = require("http");
const fs = require("fs");

//create a server object:
http.createServer(function(req, res) {
    // console.log(req);

    fs.readFile(__dirname +"/views/index.html", (err, data) => {
      if (err) {
        console.log(err);
        res.end(); //end the response
      } else {
        res.end(data); //end the response
      }
    });
    // res.write("Hello World!"); //write a response to the client
    // res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

