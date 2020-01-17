var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const datetime = require('node-datetime');
const dt = datetime.create();
const DEMLOYMENT_DATE = dt.format('m/d/Y H:M:S');
const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
const dotenv=require('dotenv').config()
console.log(dotenv)
const DEM_INFO=process.env.DEM_INFO || "Hello from nodejs backend application";
const HOSTED_ON=process.env.HOSTED_ON || "EC2 Machine";

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  res.status(200).send({error:false,hosted_on:HOSTED_ON,deployment_date:DEMLOYMENT_DATE,message:DEM_INFO,node_version:NODE_MAJOR_VERSION});
});
app.get('/version_test', function(req,res){
  if (NODE_MAJOR_VERSION < 12) {
    // Demo versioni test
    res.status(200).send({error:true,hosted_on:HOSTED_ON,deployment_date:DEMLOYMENT_DATE,message:"Hurray! Node Version is Supported",node_version:NODE_MAJOR_VERSION});
  }
  else{
    res.status(500).send({error:true,deployment_date:DEMLOYMENT_DATE,message:"Opps! Node Version is not Supported",node_version:NODE_MAJOR_VERSION});

  }
});
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
