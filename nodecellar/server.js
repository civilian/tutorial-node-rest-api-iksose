var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var wines = require('./routes/wines');
var app = express();
app.use(morgan('dev')); /* 'default','short','tiny','dev' */
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine);


app.listen(50780);
console.log("Listening on port 50780...");
