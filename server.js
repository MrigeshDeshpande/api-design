var express = require('express');
var app = express();

var jsonData = { count: 12, message: 'hey' };

app.get('/', (req, res) => {
    // res.sendFile takes an absolute path to a file and
    // sets the mime type based n the file extname
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) {
            res.status(500).send(err);
        }
    })
});

app.get('/data', (req, res) => {
    res.json(jsonData);
});


var port = 3000;
app.listen(port, () => {
    console.log('listening on http://localhost:', port);
});