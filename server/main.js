require('dotenv').config()
const { uniqueNamesGenerator, starWars } = require('unique-names-generator');
const assert = require('assert');
const express = require("express");
const app = express();


app.use(express.static('../'))

app.listen(process.env.APP_PORT, () => {
  console.log((new Date()).toISOString(), `Hello ssh! Port: ${process.env.APP_PORT}`);
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
