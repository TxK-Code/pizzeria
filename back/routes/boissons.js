const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const router = express.Router();
const pizzaCtrl = require("../controllers/pizzas");

// Ajouter un commentaire :
router.post("/", pizzaCtrl.loadBoissons);

module.exports = router;
