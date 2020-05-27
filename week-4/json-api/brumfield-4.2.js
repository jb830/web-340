/*
============================================
; Title:  brumfield-4.2.js 
; Author: Professor Krasso
; Date: 20 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates creating 
; a JSON API
;===========================================
*/
const header = require('../../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Exercise 4.2')+ '\n');

const express = require('express');
const http = require('http');
//start app
const app = express();
//great GET reqest
app.get('/customer/:id', function(req, res) {
  let id = parseInt(req.params.id, 10)
  //create JSON data to return to client
  res.json({
    firstName: 'Jo',
    lastName: 'Brumfield',
    employeeID: id
  });
});

http.createServer(app).listen(3030, function() {
  console.log('App has started on port 3030');
});

