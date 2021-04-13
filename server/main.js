require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
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

  const cannumoCollection = db.collection("cannumo");

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

  app.post("/api/cannumo", (req, res, next) => {
    const { email, name, type, data } = req.body;
    cannumoCollection.insertOne({
      email,
      name,
      type,
      data,
      createdAt: new Date(),
    });
    res.json();
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
            _id: 1,
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

  app.delete("/api/board/cell", async (req, res) => {
    const { id } = req.body;
    const allGoodCells = await boardCollection.deleteOne({
      _id: ObjectId(id),
    });
    res.json(allGoodCells);
  });

  app.get("/api/board/cell", async (req, res) => {
    const { x, y, id } = req.query;
    const allGoodCells = await boardCollection
      .aggregate([
        {
          $match: id
            ? {
                _id: ObjectId(id),
              }
            : {
                x: Number(x),
                y: Number(y),
              },
        },
        {
          $project: {
            _id: 1,
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
    const { x, y, name, color, data, id } = req.body;
    let idToReturn = null;
    try {
      if (
        (typeof x !== "number" && x !== undefined) ||
        (typeof y !== "number" && y !== undefined) ||
        (color !== undefined && typeof color !== "string") ||
        (name !== undefined && typeof name !== "string")
      ) {
        throw new Error("Wrong types!");
      }
      if (name === undefined) {
        throw new Error("You have to specify: name");
      }
      let toUpdateCell = null;
      if (id) {
        idToReturn = id;
        toUpdateCell = await boardCollection.findOne({
          _id: ObjectId(id),
        });
      } else {
        toUpdateCell = await boardCollection.findOne({
          x,
          y,
        });
      }
      const historyBlock = {
        name,
        color,
        data,
        createdAt: new Date(),
      };
      if (toUpdateCell) {
        idToReturn = toUpdateCell._id;
        await boardCollection.updateOne(toUpdateCell, {
          $push: {
            history: historyBlock,
          },
        });
      } else {
        idToReturn = (
          await boardCollection.insertOne({
            x,
            y,
            history: [historyBlock],
          })
        ).insertedId;
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
        id: idToReturn,
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

//  db.board.aggregate( [
//   // first we add the ``sortr`` field so that we can deal with empty arrays.
//   // if we see an empty array, we create one with a large negative number
//   { $project: {
//       x: 1,
//       y: 1,
//       history: 1,
//       sortr: { $cond: [ { $eq : [ '$history', []  ] }, [ -100000 ], '$history' ] }
//   } },

//   // then we unwind on our sorting-r-variant
//   { $unwind: '$sortr' },

//   // so that we can group by ID and pick out the last of the $sortr values
//   { $group: {
//       _id: '$_id',
//       x: { $first: '$x' },
//       y: { $first: '$y' },
//       history: { $first: '$history' },
//       sortr: { $last: '$sortr' }
//   } },

//   // then we sort by the last items over all the documents
//   { $sort: { sortr: 1 } },

//   // and reproject so that we get rid of the ``sortr`` field
//   { $project: { x: 1, y: 1, history: 1 } }
// ] )
