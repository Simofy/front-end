const { uniqueNamesGenerator, starWars } = require('unique-names-generator');
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log('Hello ssh!');
});

app.get('/api/generate-shopping-cart', (req, res, next) => {
  const { size } = req.query;
  const total = size ? size : Math.floor(Math.random() * 100 + 10);
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
})