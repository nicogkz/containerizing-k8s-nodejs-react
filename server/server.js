const config = require("./config.js")


// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require("pg");
const db = new Pool({
  user: config.pgUser,
  host: config.pgHost,
  database: config.pgDatabase,
  password: config.pgPassword,
  port: config.pgPort
});

db.on("connect", client => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT,status VARCHAR(50))")
    .catch(err => console.log("PG ERROR", err));
});

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi there, welcome on this API!");
});

// get the values
app.get("/getvalues/all", async (req, res) => {
  const values = await db.query("SELECT * FROM values");

  res.send(values);
});

const standing = ["awesome","brilliant","terrific","wow!"]
function getRandomInteger(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// now the post -> insert value
app.post("/addvalues", async (req, res) => {
  if (!req.body.value) res.send({ working: false });

  db.query("INSERT INTO values(number,status) VALUES($1,$2)", [req.body.value,standing[getRandomInteger(0, 3)]]);

  res.send({ working: true });
});

const PORT =  12000 //process.env.PORT ||
app.listen(12000, err => {
  console.log(`Listening on port ${PORT}`);
});