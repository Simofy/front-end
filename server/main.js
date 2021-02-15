require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const { uniqueNamesGenerator, starWars } = require('unique-names-generator');
const express = require("express");
const dataLakes = require('./lakeData.json');
const dataSlang = require('./slangData.json');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appPort = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(appPort, () => {
  console.log((new Date()).toISOString(), `Hello ssh! Port: ${appPort}`);
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  next();
})

app.get('/api/get-random-lake', (req, res, next) => {


  const index = Math.floor(dataLakes.length * Math.random());
  res.json(dataLakes[index]);
});

app.get('/api/get-random-slang', (req, res, next) => {
  const index = Math.floor(dataSlang.length * Math.random());
  res.json(dataSlang[index]);
});

app.get('/api/generate-shopping-cart', (req, res, next) => {

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


const url = 'mongodb://localhost:27017';
const dbName = 'simutis-2020';

MongoClient.connect(url, function (err, client) {
  console.log("Connected successfully to server");



  const db = client.db(dbName);
  const messagesCollection = db.collection('messages');


  app.get('/api/messages', async (req, res, next) => {

    const messages = await messagesCollection.find({}).toArray();
    res.json(messages);
  });

  app.post('/api/messages', (req, res, next) => {

    const {
      message,
      name
    } = req.body;
    if (message && name) {
      messagesCollection.insertOne({
        message,
        name
      });
    }
    res.json();
  });

  // client.close();
});
/**
 * (1 * css + 1 * js && js > 0.1 && js < 0.9) *
 * original idea *
 * process + 0.2 *
 * extra work
 *
 */