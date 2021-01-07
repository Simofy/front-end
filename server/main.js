require('dotenv').config();
const { uniqueNamesGenerator, starWars } = require('unique-names-generator');
const express = require("express");
const dataEzerai = require('./data');
const app = express();

const appPort = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(appPort, () => {
  console.log((new Date()).toISOString(), `Hello ssh! Port: ${appPort}`);
});

app.get('/api/get-random-lake', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  const index = Math.floor(dataEzerai.length * Math.random());
  res.json(dataEzerai[index]);

})

app.get('/api/generate-shopping-cart', (req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  const { limit, exclude } = req.query;
  const total = limit ? limit : Math.floor(Math.random() * 100 + 10);
  const response = [];
  for (let i = 0; i < total; i++) {
    response.push({
      name: uniqueNamesGenerator({
        dictionaries: [starWars],
        style: 'capital',
      }),
      price: (Math.random() * 100),
      vegan: (Math.random() > 0.5),
    })
  }
  res.json(response);
});


/**
 * (1 * css + 1 * js && js > 0.1 && js < 0.9) *
 * original idea *
 * process + 0.2 *
 * extra work
 *
 */