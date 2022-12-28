// var express=require('express');
// var app=express();

// var bodyParser=require('body-parser');
// //var _=require('lodash');
// /*express has in built middlewares-> static, bodyparser n all

//  express.static will serve everything
//  with in client as a static resource
// also, it will find server the index.html on the
//  root of that directory on a GET to
// */


// app.use(express.static('client'));
// //bodyparser --> makes it possible to post JSON to server
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// var lions=[];
// var id=0;

// app.get('/lions',(req,res)=>{
//     res.json(lions);
// });



// app.listen(3000,()=>{
//     console.log('We are here on PORT 3000');
// });


var express = require('express');
// var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.param('id', (req, res, next, id) => {
    var lion = _.find(lions, { id: id });

    if (lion) {
        req.lion = lion;
        next();
    }
    else {
        res.send();
    }
})

/**
 * requests to our routes(get,put,post,delete) will come through the app.
 * params, because both routes use name_of_the_parameter parameter.
 * 
 * router.param is a powerful tool that we can use to keep our code from repeating core functionality through routes. 
 * This is a pattern we want to frequently follow: identify multiple pieces of code that accomplish
 *  the same goal, put it into a single component, let that component do that thing
 */

var lions = [];
var id = 0;

//this is middleware function
var updateId=(req,res,next)=>{
    if(!req.body.id)
    {
        id++;
        req.body.id=id + ''
    }
    next();
};

app.get('/lions', function (req, res) {
    res.json(lions);
});

app.get('/lions/:id', function (req, res) {
    var lion = _.find(lions, { id: req.params.id });
    res.json(lion || {});
});

app.post('/lions',updateId, function (req, res) {
    var lion = req.body;

    lions.push(lion);

    res.json(lion);
});


app.put('/lions/:id', function (req, res) {
    var update = req.body;
    if (update.id) {
        delete update.id
    }

    var lion = _.findIndex(lions, { id: req.params.id });
    if (!lions[lion]) {
        res.send();
    } else {
        var updatedLion = _.assign(lions[lion], update);
        res.json(updatedLion);
    }
});

app.delete('/lions/:id', (req, res) => {
    var lion = _.findIndex(lions, { id: req.params.id });
    if (!lions[lion]) {
        res.send();
    }
    else {
        var deleteLion = lions[lion];
        lion.splice(lion, 1);
        res.json(deleteLion);
    }
});
//error handling middleware

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).send(err)
    }
})

app.listen(3000);
console.log('on port 3000');