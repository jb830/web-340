/*
============================================
; Title:  brumfield-3.2.js 
; Author: Professor Krasso
; Date: 13 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates logging requests using 
; morgan middleware.
;===========================================
*/
const header = require('../../brumfield-header.js');
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const ejs = require('ejs');
const fs = require('fs');

console.log(header.display('Joanna', 'Brumfield', 'Exercise 2.3')+ '\n');

//start app
const app = express();

//sets up view engine and path to ejs views 
app.set('views', path.resolve(__dirname, 'logging/views'));
app.set('view engine', 'ejs');

// Creates .log file and appends request logs to it
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'logging/logger.log'), { flags: 'a' })
app.use(logger('short', { stream: accessLogStream }))
//simply print logs to console
app.use(logger('short'));

//renders index view 
app.get('/', function(req, res) {
  res.render('index', {
    message: "Hello, I am learning how to log using middleware and write it to a .log and .txt file. I was trying to figure out how to make it populate below this text using the .txt data but couldn't figure it out :( Maybe I could create a static file server and point to it?",
  });
});
//renders 404.ejs page is file is not found. 
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});
//create server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
