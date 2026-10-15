import express from 'express';
import path from 'path';
var app = express();
import * as http from 'http';
import fs from 'fs';
var port = process.env.PORT || 3000;
var server = http.createServer(app);
import { fileURLToPath } from 'url';
import 'dotenv/config'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'exampleapi.json'), 'utf8'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res, next) {
    res.render('index', {data: data})
    console.log(req.query.selectLight)



  });


app.post('/', (request, response) => {
  // There is no API to save presets to, so log the preset and return to the form.
  // Previously this posted to a relative file path, which always failed and left the request hanging.
  console.log(JSON.stringify(request.body));
  response.redirect('/')
  })

// On Vercel the exported app runs as a serverless function, so only listen when running locally
if (!process.env.VERCEL) {
  server.listen(port, () => {
      console.log('listening on http://localhost:' + port);

    });
}

export default app;
