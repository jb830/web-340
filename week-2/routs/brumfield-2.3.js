const header = require('../../brumfield-header.js');
const express = require('express');
const http = require('http');
//start express app
const app = express();

console.log(header.display('Joanna', 'Brumfield', 'Exercise 2.3')+ '\n');

//creates 404 response if path unknown
app.use(function(req, res){
    res.statusCode = 404;
    res.end('404!');
});
//create path to "home page"
app.get('/', function(req, res){
  res.end('Welcome to my "Homepage"!');
});
//create path to "about page"
app.get('/about', function(req, res){
  res.end('Welcome to the "About" page!');
});
//create path to "contact page"
app.get('/contact', function(req, res){
  res.end('Welcome to the "Contact" page!');
});

http.createServer(app).listen(8080);

