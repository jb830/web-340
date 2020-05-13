/*
============================================
; Title:  brumfield-3.3.js 
; Author: Professor Krasso
; Date: 13 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates routing with express
;===========================================
*/
const header = require('../../brumfield-header.js');
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const ejs = require('ejs');

console.log(header.display('Joanna', 'Brumfield', 'Exercise 3.3')+ '\n');
//start app
app = express();

//set path for views and view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
//log requests to console 
app.use(logger('short'));
//if value is provided after root path in url, render index and output value 
app.get('/:employeeId', function(req, res) {
  let employeeId = parseInt(req.params.employeeId, 10);
  res.render('index', {
    employeeId: employeeId
  })
});
//create server
http.createServer(app).listen(3000, function() {
  console.log('App started on port 3000');
});