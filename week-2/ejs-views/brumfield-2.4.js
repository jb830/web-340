/*
============================================
; Title:  brumfield-2.4.js 
; Author: Professor Krasso
; Date: 5 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates rendering views and
; passing values using Express/EJS
;===========================================
*/
const header = require('../../brumfield-header.js');
const http = require('http');
const express = require('express');
const path = require('path');
const ejsLint = require('ejs-lint');

console.log(header.display('Joanna', 'Brumfield', 'Assignment 3.4') + '\n');

//Init app
const app = express();
//set path for views
app.set('views', path.resolve(__dirname, 'views'));
//set path for public/custom styles
app.use(express.static(__dirname + '/public'));
//set up view engine
app.set('view engine', 'ejs');
//render index and pass it values via the response object
app.get('/', function(req, res){
  res.render('index', { 
    firstName: 'Bleep',
    lastName: 'Bloop',
    address: 'Somewhere on Neptune'
  });
}); 
//render 404 page if path is not defined 
app.use(function(req, res) {
  res.status(404).render('404');
})
//run server on port 8080
http.createServer(app).listen(8080, function() {
  console.log('EJS-Views app started on port 8080');
});