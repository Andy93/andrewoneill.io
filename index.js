const express = require('express')
const app = express()
let server = require('http').Server(app);
var port = process.env.PORT || 8000

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static('views'));

require('./routes/routes.js');

server.listen(port, function() {
    console.log("App is running on port " + port);
});
