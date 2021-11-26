const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

exports.loadPizzas = (req, res, next) => {
  console.log(req.body);

  db.query(`SELECT * FROM pizza`, function (err, result) {
    if (err) throw err;
    console.log(result, "<== Result Pizza");
    res.status(201).json(result);
  });
};

exports.loadBoissons = (req, res, next) => {
  console.log(req.body);

  db.query(`SELECT * FROM boisson`, function (err, result) {
    if (err) throw err;
    console.log(result, "<== Result Boisson");
    res.status(201).json(result);
  });
};

exports.loadDesserts = (req, res, next) => {
  console.log(req.body);

  db.query(`SELECT * FROM dessert`, function (err, result) {
    if (err) throw err;
    console.log(result, "<== Result Boisson");
    res.status(201).json(result);
  });
};
