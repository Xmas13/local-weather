const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

const app = express();
const port = process.env.PORT || 8080

require('dotenv').config();
const appID = process.env.APPID_WEATHER

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'angular-src/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular-src/dist/index.html'));
});

app.post('/api', (req, res) => {
  const lat = "lat=" + req.body.latitude;
  const lon = "lon=" + req.body.longitude;
  const appid = "appid=" + appID;
  const url = "http://api.openweathermap.org/data/2.5/weather?" + lat + "&" + lon + "&" + appid;
  request.get(url, (err, response, body) => {
    if(err) res.send(err);
    res.send(body);
  })
})

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
