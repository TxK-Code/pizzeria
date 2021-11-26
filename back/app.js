const express = require("express");
require("dotenv").config();

const mysql = require("mysql");

const loadPizzas = require("./routes/pizzas");
const loadBoissons = require("./routes/boissons");
const loadDesserts = require("./routes/desserts");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const app = express();

const bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/pizzas", loadPizzas);
app.use("/api/boissons", loadBoissons);
app.use("/api/desserts", loadDesserts);

module.exports = app;
