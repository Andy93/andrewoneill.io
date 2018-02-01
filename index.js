const express = require('express')
const app = express()
let server = require('http').Server(app);
var port = process.env.PORT || 8000

app.get('/', function(req, res){
      res.render('index.ejs');
    });

    app.get('/playground', function(req, res){
      res.render('playground.ejs');
    });

    app.get('/pixel-width', function(req, res){
      res.render('pixel-width.ejs');
    });

    app.get('/mini-projects', function(req, res){
      res.render('mini-projects.ejs');
    });
    
    // 404 & 500 errors
    app.use(function(req, res, next) {
      res.status(404).send('Sorry cant find that!');
    });

    app.use(function(err, req, res, next) {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static('views'));

require('./routes/routes.js');

server.listen(port, function() {
    console.log("App is running on port " + port);
});
