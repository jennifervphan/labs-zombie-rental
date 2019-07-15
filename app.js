const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', function(req, res) {
    res.render('index.hbs');
});

// app.get('/collections', function(req, res) {
//     res.render('index.hbs');
// });

app.get('/packages', function(req, res) {
    res.render('packages.hbs');
});

app.get('/contact', function(req, res) {
    res.render('contact.hbs');
});


app.listen(3000);