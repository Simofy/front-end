require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const { uniqueNamesGenerator, starWars } = require("unique-names-generator");
const express = require("express");
const shortid = require("shortid");
const dataLakes = require("./lakeData.json");
const dataSlang = require("./slangData.json");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const appPort = 3000;

app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

app.listen(appPort, () => {
  console.log(new Date().toISOString(), `Hello ssh! Port: ${appPort}`);
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // If needed
  res.setHeader("Access-Control-Allow-Credentials", true); // If needed
  next();
});

app.get("/api/test", (req, res, next) => {
  res.json({});
});

app.get("/api/get-random-lake", (req, res, next) => {
  const index = Math.floor(dataLakes.length * Math.random());
  res.json(dataLakes[index]);
});

app.get("/api/get-random-slang", (req, res, next) => {
  const index = Math.floor(dataSlang.length * Math.random());
  res.json(dataSlang[index]);
});

app.get("/api/generate-shopping-cart", (req, res, next) => {
  const { limit, exclude } = req.query;
  const total = limit ? limit : Math.floor(Math.random() * 100 + 10);
  const response = [];
  for (let i = 0; i < total; i++) {
    response.push({
      id: shortid.generate(),
      name: uniqueNamesGenerator({
        dictionaries: [starWars],
        style: "capital",
      }),
      price: Math.random() * 100,
      vegan: Math.random() > 0.5,
    });
  }
  res.json(response);
});

const url = "mongodb://127.0.0.1:27017";
const dbName = "simutis-2020";

MongoClient.connect(url, function (err, client) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const messagesCollection = db.collection("messages");

  const boardCollection = db.collection("board");

  const boardStatusCollection = db.collection("board-status");

  boardStatusCollection.updateOne(
    {},
    {
      $setOnInsert: {
        update: 0,
        minX: Infinity,
        maxX: 0,
        minY: Infinity,
        maxY: 0,
      },
      $inc: {
        serverRestart: 1,
      },
    },
    {
      upsert: true,
    }
  );

  app.get("/api/messages", async (req, res, next) => {
    const messages = await messagesCollection
      .find(
        {},
        {
          sort: {
            createdAt: -1,
          },
          limit: 10,
        }
      )
      .toArray();
    res.json(messages);
  });

  app.post("/api/messages", (req, res, next) => {
    const { message, name } = req.body;
    if (message && name) {
      messagesCollection.insertOne({
        message,
        createdAt: new Date(),
        name,
      });
    }
    res.json();
  });

  // Game RESTFUL api

  app.get("/api/board/documentation", function (req, res) {
    res.sendFile(__dirname + "/public/gameDocumentation.html");
  });

  app.get("/api/board/status", async (req, res) => {
    const status = await boardStatusCollection
      .aggregate([
        {
          $match: {},
        },
        {
          $project: {
            _id: 0,
            serverRestart: 0,
          },
        },
      ])
      .toArray();
    res.json(status);
  });

  app.get("/api/board", async (req, res) => {
    const { x, y, w, h } = req.query;
    const allGoodCells = await boardCollection
      .aggregate([
        {
          $match: {
            x: {
              $gte: Number(x),
              $lt: Number(x) + Number(w),
            },
            y: {
              $gte: Number(y),
              $lt: Number(y) + Number(h),
            },
          },
        },
        {
          $project: {
            _id: 0,
            x: 1,
            y: 1,
            data: {
              $arrayElemAt: ["$history", -1],
            },
          },
        },
      ])
      .toArray();
    res.json(allGoodCells);
  });

  app.get("/api/board/cell", async (req, res) => {
    const { x, y } = req.query;
    const allGoodCells = await boardCollection
      .aggregate([
        {
          $match: {
            x: Number(x),
            y: Number(y),
          },
        },
        {
          $project: {
            _id: 0,
            x: 1,
            y: 1,
            history: 1,
          },
        },
      ])
      .toArray();
    res.json(allGoodCells);
  });

  app.post("/api/board", async (req, res) => {
    const { x, y, name, color } = req.body;
    try {
      if (
        x === undefined ||
        y === undefined ||
        name === undefined ||
        color === undefined
      ) {
        throw new Error("You have to specify: x, y, name, color");
      }
      const toUpdateCell = await boardCollection.findOne({
        x,
        y,
      });
      const historyBlock = {
        name,
        color,
        createdAt: new Date(),
      };
      if (toUpdateCell) {
        await boardCollection.updateOne(toUpdateCell, {
          $push: {
            history: historyBlock,
          },
        });
      } else {
        await boardCollection.insertOne({
          x,
          y,
          history: [historyBlock],
        });
      }
      await boardStatusCollection.updateOne(
        {},
        {
          $inc: {
            update: 1,
          },
          $min: {
            minX: x,
            minY: y,
          },
          $max: {
            maxX: x,
            maxY: y,
          },
        }
      );
      res.status(200);
      res.json({
        status: "OK",
      });
    } catch (e) {
      console.log(e);
      res.status(500);
      res.json(e);
    }
  });
});
/**
 * (1 * css + 1 * js && js > 0.1 && js < 0.9) *
 * original idea *
 * process + 0.2 *
 * extra work
 *
 */
