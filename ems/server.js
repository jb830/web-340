const http = require('http');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const ejsLint = require('ejs-lint');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const Employee = require('./models/employee');
const csrf = require('csurf');

//set up for CSRF protection
const csrfProtection = csrf({
  cookie: true
});

//create app
const app = express();

//Set path to views and public folder
app.use(express.static('public'))
app.set('views', path.resolve(__dirname, 'views'));
//set view engine to ejs
app.set('view engine', 'ejs');

//Log HTTP requests
app.use(logger('short'));
//helmet for setting the Content-Security-Policy in the HTTP Header
app.use(helmet.xssFilter());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cookieParser());
app.use(csrfProtection);
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

//mongo setup with mongoose
const mongoDB = 'mongodb+srv://jbrum830:jM0G05BQMzlc0bRB@buwebdev-cluster-1-zho8o.mongodb.net/fms?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Application connected to compass ems');
});

//create paths and render ejs views for each page
//render index
app.get('/', function (req, res) {
  Employee.find({}, function (err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.render('index', {
        title: 'Employees',
        employees: employees
      })
    }
  });
});
//render view for list 
app.get('/list', function (req, res) {
  Employee.find({}, function (err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.render('list', {
        title: 'Employees',
        employees: employees
      })
    }
  });
});
//render new view to add employee records
app.get('/new', function (req, res) {
  res.render('new', {});
});

//render view of individual employee record
app.get('/view/:queryName.ejs', function (req, res) {
  const queryName = req.params['queryName'];

  Employee.find({
    'firstName': queryName
  }, function (err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        res.render('view', {
          title: 'Employee Records',
          employee: employees
        })
      } else {
        console.log('list too short');
        res.redirect('/');
      };
    };
  })
});

//post user input to db
app.post('/process', function (req, res) {
  console.log(req.body.txtFirstName, req.body.txtLastName);
  if (!req.body.txtFirstName) {
    res.status(400).send("Entries must have a name");
    return;
  }
  // get the request's form data
  let firstName = req.body.txtFirstName;
  let lastName = req.body.txtLastName;

  // create a employee model
  let employee = new Employee({
    firstName: firstName,
    lastName: lastName
  });
  // save
  employee.save(function (error) {
    if (error) throw error;
    console.log(firstName + " saved successfully!");
  });
  res.redirect('/');
});

//renders 404.ejs page is path not found
app.use(function (req, res) {
  res.status(404);
  res.render('404');
});

module.exports = Employee;

// //server
app.set('port', process.env.PORT || 3050);
http.createServer(app).listen(app.get('port'), function() { console.log('Application started on port' + app.get('port')) });