const header = require('../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Exercise 1.3')+ '\n');
/*
============================================
; Title:  exercise-1.3.js 
; Author: Professor Krasso
; Date: 28 April, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates use of 
; commonJs to include Node.js modules
;===========================================
*/

const url = require('url');

const parsedURL = url.parse('https://www.example.com/profile?name=Joanna');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);