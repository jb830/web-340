/*
============================================
; Title:  brumfield-3.3.js 
; Author: Professor Krasso
; Date: 13 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates Demonstrates how routing, 
; HTTP requests, Express middleware, logging, and sending 
; data to and from the server works
;===========================================
*/
const header = require('../../brumfield-header.js');
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const ejs = require('ejs');

console.log(header.display('Joanna', 'Brumfield', 'Exercise 3.4')+ '\n');

//start app
const app = express();

//sets up view engine and path to ejs views 
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//create paths and render ejs views for each page
app.get('/', function(req, res) {
  res.render('index', {
    message: 'Home Page'
  });
});
app.get('/about', function(req, res) {
  res.render('about', {
    message: 'About Page'
  });
});
app.get('/contact', function(req, res) {
  res.render('contact', {
    message: 'Contact Page'
  });
});
app.get('/products', function(req, res) {
  res.render('products', {
    message: 'Products Page'
  });
});
//renders 404.ejs page is path not found
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

//server
http.createServer(app).listen(3030, function() {
  console.log('App is running on port 3030');
});

