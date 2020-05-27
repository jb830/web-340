/*
============================================
; Title:  brumfield-5.2.js 
; Author: Professor Krasso
; Date: 27 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates EJS if/else render
;===========================================
*/
const header = require('../../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Exercise 5.2')+ '\n');

const express = require('express');
const http = require('http');
const path = require('path');

app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let name = [
  'Deliah',
  'Tyler',
  'Samantha',
  'Naomi',
  'Aaron'
];

app.get('/', function (req, res) {
  res.render('index', {
    names: name
  })
});

http.createServer(app).listen(3000, function () {
  console.log('App started on port 3000');
});

