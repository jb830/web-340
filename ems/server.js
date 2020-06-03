const http = require('http');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const ejsLint = require('ejs-lint');
//create app
const app = express();

//Set path to views and public folder
app.set('public', path.resolve(__dirname, 'public'));
app.set('views', path.resolve(__dirname, 'views'));
//set view engine to ejs
app.set('view engine', 'ejs');

//Log HTTP requests
app.use(logger('short'));

//create paths and render ejs views for each page
app.get('/', function(req, res) {
  res.render('index', {
    message: 'Home Page'
  });
});
app.get('/list', function(req, res) {
  res.render('list', {
    message: 'List Page'
  });
});
app.get('/new', function(req, res) {
  res.render('new', {
    message: 'New Page'
  });
});
app.get('/view', function(req, res) {
  res.render('view', {
    message: 'View Page'
  });
});
//renders 404.ejs page is path not found
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

//server
http.createServer(app).listen(3050, function() {
  console.log('App is running on port 3050');
});
