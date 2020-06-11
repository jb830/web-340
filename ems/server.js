const http = require('http');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const ejsLint = require('ejs-lint');
const mongoose = require('mongoose');
const Employee = require("./models/employee");

//create app
const app = express();

//Set path to views and public folder
app.use(express.static('public'))
app.set('views', path.resolve(__dirname, 'views'));
//set view engine to ejs
app.set('view engine', 'ejs');

//Log HTTP requests
app.use(logger('short'));

//mongo setup with mongoose
const mongoDB = 'mongodb+srv://jbrum830:jM0G05BQMzlc0bRB@buwebdev-cluster-1-zho8o.mongodb.net/fms?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Application connected to compass ems');
});

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

let employee = new Employee({
  firstName: 'John',
  lastName: 'Doe'
});

module.exports = Employee;

//server
http.createServer(app).listen(3050, function() {
  console.log('App is running on port 3050');
});
