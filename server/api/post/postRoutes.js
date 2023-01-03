var router = require('express').Router();
var logger = require('../../util/logger');

var controller=require('./postController');
var createRoutes=require('../../util/createRoutes');

createRoutes(controller, router);

module.exports = router;