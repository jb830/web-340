/*
============================================
; Title:  brumfield-7.3.js 
; Author: Professor Krasso
; Date: 10, June, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates TDD with Mocha Chai
;===========================================
*/
const header = require('../../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Exercise 7.3')+ '\n');

const express = require('express');
const logger = require('morgan');
const mocha = require('mocha');
const http = require('http');

const app = express();
app.use(logger('dev'));

http.createServer(app).listen(3000, function () {
  console.log('App started on port 3000');
});


