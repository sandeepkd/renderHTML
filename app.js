const express = require('express'); // import express
const app = express();  // create app method
const ejs = require('ejs');

app.set('view engine', 'ejs');

// this is a home route can be accessed from the browser
app.get('/',function(req, res){

  res.render('home', { pageName: 'Home', message:"Hello World!"});

});

// Post method can be accessed from api request
app.post('/',function(req, res){

    res.send("Hello World!");
  
});

module.exports = app; // export this module 