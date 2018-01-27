const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static('views'));

require('./routes/routes.js');

app.listen(3000, () => console.log('Example app listening on port 3000!'))