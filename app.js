const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', function(req, res) {
    res.render('index.hbs');
});

app.get('/packages', function(req, res) {
    res.render('packages.hbs');
});

app.get('/contact', function(req, res) {
    res.render('contact.hbs');
});


app.listen(3000);