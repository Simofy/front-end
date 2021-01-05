require('dotenv').config()
const { uniqueNamesGenerator, starWars } = require('unique-names-generator');
const assert = require('assert');
const express = require("express");
const app = express();

const appPort = 2020;

app.use(express.static('../'))

app.listen(appPort, () => {
  console.log((new Date()).toISOString(), `Hello ssh! Port: ${appPort}`);
});

app.get('/api/generate-shopping-cart', (req, res, next) => {
  const { limit } = req.query;
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
