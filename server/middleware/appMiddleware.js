var morgan = require('morgan');
var bodyParser = require('body-parser');
// setup global middleware 

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};