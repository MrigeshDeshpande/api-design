var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('lodash');

var tigerRouter = require('./tigers')

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tigers', tigerRouter)

app.use((err, req, res, next) => {
    if (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
})

// app.listen(5000, () => {
//     console.log('listening on port 5000');
// });
//remove listen and export 
module.exports=app;