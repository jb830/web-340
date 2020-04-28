const header = require('../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Exercise 1.3')+ '\n');
/*
============================================
; Title:  assignment-1.5.js 
; Author: Professor Krasso
; Date: 28 April, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates simple  
; Node.js server and HTTP request
;===========================================
*/
const http = require('http');

function processRequest(req, res) {
  
  let body = "Be who you are and say what you feel, those who mind don't matter, and those who matter don't mind. -Bernard M. Baruch";

  let contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });
  res.end(body);
};

const s = http.createServer(processRequest)

s.listen(8080);