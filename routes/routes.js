module.exports = function(app) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs
    });
    
    app.get('/pixel-width', function(req, res) {
        res.render('pixel-width.ejs'); // load the pixel-width.ejs
    });
    
    // 404 & 500 errors
    app.use(function(req, res, next) {
      res.status(404).send('Sorry cant find that!');
    });

    app.use(function(err, req, res, next) {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });
};
