import express from 'express';
import path from 'path';
var app = express();
import * as http from 'http';
var port = process.env.PORT || 3000;
var server = http.createServer(app);
import { fileURLToPath } from 'url';
import 'dotenv/config'
import data from './public/exampleapi.json' assert { type: "json" };
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res, next) {
    res.render('index', {data: data})
  });

app.post('/', (request, response) => {

  const url = './public/exampleapi.json'
    postJson(url, request.body).then((data) => {
      let newPreset = { ... request.body}
      console.log(JSON.stringify(request.body));
     if (data.success) {
          response.redirect('/presetSaved')
      }
      else {
      const errorMessage = data.message
  
      }
    })
  })
server.listen(port, () => {
    console.log('listening on http://localhost:' + port);
  
  });




  async function postJson(url, body) {
    return await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .catch((error) => error)
  }

export default app;
