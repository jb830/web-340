const header = require('../../brumfield-header.js');
const express = require('express');
const http = require('http');

console.log(header.display('Joanna', 'Brumfield', 'Exercise 2.2')+ '\n');

//start express app
const app = express(); 

//mounts middleware function 
app.use(function(request, response){
  console.log('In comes request to: ' + request.url);
  response.end('Hello world');
});

//create local server on port 8080
http.createServer(app).listen(8080);