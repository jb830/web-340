const express = require('express');
const pug = require('pug');
const http = require('http');
const path = require('path');

const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index', {
    message: 'Welcome to my first pug template project!'
  });
});

http.createServer(app).listen(3000, function(){
  console.log('App started on port 3000');
});