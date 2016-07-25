var express = require('express');
var wines = require('./routes/wines.js');

var app = express();

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);

app.listen(50780);
console.log("Listening on port 50780...");
