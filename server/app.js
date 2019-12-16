// import files and packages up here
const express = require('express');
const data = require('./data');
const morgan = require('morgan');

// create your express server below
const app = express();


// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', function(req, res) {
  console.log('I used to be an adventurer like you until I took an arrow to the knee.'),
  res.send("hello world")
});

app.get('/data', function(req, res) {
  console.log('Heres that thing you asked for.'),
  res.send(data)
});


// finally export the express application
module.exports = app;
