var functions = require('firebase-functions');
var express = require('express');
var cons = require('consolidate');

var app = express();
app.engine('hbs', cons.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/hai', function(req, res) {
    res.send('Hello bro, Berhasil membuka sesuatu yang baru dan selamat berpusing ria')
})


var forumData = [
    {"title": "gimana sih gan cara mulainya?"},
    {"title": "Bingung nih gan.. saran dunds.."}
]

app.get('/forum', function(req, res) {
    res.render('forum', { forums: forumData })
})

exports.app = functions.https.onRequest(app);
