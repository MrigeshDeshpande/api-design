var express = require('express');
var app = express();
var api =require('./api/api')

//setup app middleware
require('./middleware/appMiddleware')(app)

//setup the API 
app.use('/api',api)

//export the app
module.exports=app;