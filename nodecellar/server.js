var express = require('express');
var wines = require('./routes/wines.js');

var app = express();

app.configure(function() {
    app.use(express.logger('dev')); /*'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine);


app.listen(50780);
console.log("Listening on port 50780...");
