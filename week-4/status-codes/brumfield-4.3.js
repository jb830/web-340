/*
============================================
; Title:  brumfield-4.3.js 
; Author: Professor Krasso
; Date: 20 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates setting HTTP
; status codes 
;===========================================
*/
const header = require('../../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Exercise 4.3')+ '\n');

const express = require('express');
const http = require('http');
const app = express();

app.get('/not-found', function (req, res) {
  res.status(404);
  res.json({
    error: 'Sorry, page not found'
  })
});

app.get('/ok', function (req, res) {
  res.status(200);
  res.json({
    message: "You're all good!"
  })
});

app.get('/not-implemented', function (req, res) {
  res.status(501);
  res.json({
    error: '501 Not Implemented server error response code means that the server does not support the functionality required to fulfill the req(MDN)'
  })
});

http.createServer(app).listen(3030, function() {
  console.log('App started on port 3030');
});