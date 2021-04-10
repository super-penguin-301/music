'use strict';

// import all packages we need
require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');
const methodoverride = require('method-override');
const app = express();
const client = new pg.Client(process.env.DATABASE_URL);
app.set('view engine', 'ejs');
app.use(express.static('./public/'));
app.use(express.urlencoded({extended : true}))
app.use(methodoverride('_method'));
//---------------------------------------------------------

// page's methods
app.get('/', indexHandler);
app.get('/search', searchHandler);
app.get('/favorite', favoriteHandler);
app.get('/about', aboutHandler);
app.get('/details/:id', detailsHandler);
app.post('/search', searchPostHandler);
//---------------------------------------------------------
// error handler functions
app.use('*', notFoundHandler); // 404 not found url
 
app.use(errorHandler);

function notFoundHandler(request, response) {
  response.status(404).sendFile('./error', {root : './'})
}

function errorHandler(err, request, response, next) {
  response.status(500).render('error');
}
//---------------------------------------------------------

// connect to DB & run the server
client.connect().then(()=> {

    app.listen(PORT, ()=> console.log(`I'm working at port ${PORT}`))
});
//---------------------------------------------------------


let btata = false;
// handler functions
function indexHandler(req, res) {
    res.render('index');
}
function searchHandler(req, res) {
    console.log(req.body);
    btata = false;
    res.render('search', {ongs:btata });
}
function favoriteHandler(req, res) {
    res.render('favorite');
}
function detailsHandler(req, res) {
    res.render('details');
}
function aboutHandler(req, res) {
    res.render('about');
}
function searchPostHandler(req, res) {
    let info = req.body.search;
    console.log(info);
    let URL = `https://api.deezer.com/search?q=${info}&limit=10`;
    
    superagent.get(encodeURI(URL)).then( songs => {
        console.log(songs.body.data);
        btata = true;
        res.render('search', {mySongs: songs.body.data, ongs:btata})
    })
}
//---------------------------------------------------------
