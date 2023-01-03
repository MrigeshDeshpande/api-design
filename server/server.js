var express = require('express');
var app = express();
var api =require('./api/api')
var config=require('./config/config');

require('mongoose').connect(config.db.url);

//setup app middleware
require('./middleware/appMiddleware')(app);

//setup the API 
app.use('/api/',api)

//export the app
module.exports=app;