/*
============================================
; Title:  brumfield-6.3.js 
; Author: Professor Krasso
; Date: 3, June, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates setting up Mongoose to 
; connect with MongoDB
;===========================================
*/
const header = require('../../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Exercise 5.2')+ '\n');

const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const http = require('http');

const app = express();
app.use(logger('dev'));

const mongoDB = 'mongodb+srv://jbrum830:jM0G05BQMzlc0bRB@buwebdev-cluster-1-zho8o.mongodb.net/fms?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  // useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Application connected to mLab MongoDB instance');
});

http.createServer(app).listen(3000, function () {
  console.log('App started on port 3000');
});