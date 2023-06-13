var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var port = process.env.PORT || 3000;
var server = http.createServer(app);
const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://broker.emqx.io')

require('dotenv').config()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', port);


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res, next) {
      res.render('index')
  });

  client.on('connect', function () {
    client.subscribe('wled/9df798', function (err) {
      if (!err) {
        client.publish('wled/9df798', 'ON')
      }
    })
    client.subscribe('wled/9df798/api', function (err) {
        if (!err) {
          client.publish('wled/9df798/api', 'FX=23')
        }
      })
    client.subscribe('wled/9df798/col', function (err) {
        if (!err) {
          client.publish('wled/9df798/col', '#ffff')
        }
      })   
  })
  
  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })

server.listen(port, () => {
    console.log('listening on http://localhost:' + port);
  
  });

module.exports = app;
