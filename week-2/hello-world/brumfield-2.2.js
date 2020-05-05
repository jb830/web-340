const express = require('express');
const http = require('http');

//start express app
const app = express(); 

//mounts middleware function 
app.use(function(request, response){
  console.log('In comes request to: ' + request.url);
  response.end('Hello world');
});

//create local server on port 8080
http.createServer(app).listen(8080);