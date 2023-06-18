var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var port = process.env.PORT || 3000;
var server = http.createServer(app);


require('dotenv').config()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', port);


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res, next) {
      res.render('index')
  });

server.listen(port, () => {
    console.log('listening on http://localhost:' + port);
  
  });

module.exports = app;
