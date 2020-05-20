/*
============================================
; Title:  brumfield-4.4.js
; Author: Professor Krasso
; Date: 20 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates CRUD operations in a
; Node.js API.
;===========================================
*/

const header = require('../../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Assignment 4.4')+ '\n');

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(3000, function() {
  console.log("Application started on port 3000");
});
