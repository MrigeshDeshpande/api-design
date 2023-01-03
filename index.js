/*
    intro point for our server.
    */
var config = require('./server/config/config');
var app = require('./server/server');
/*
    logger is a wrapper around console.log that adds color,
    logs objects as json and can be conditionally turned off
    so you don't have to erase all calls to it
*/

var logger = require('./server/util/logger');

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);


