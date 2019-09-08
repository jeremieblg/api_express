//app.js
const express = require("express");
const app = express();
const bdd = require("./core/database/connectionBdd");
require("dotenv").config();
app.get("/", (req, res) => {
  // const selectQuery = "SELECT * FROM ticket";
  // bdd.query(selectQuery, function select(error, results) {
  //   if (error) {
  //     console.log(error);
  //     bdd.end();
  //     return;
  //   }
  //   if (results.length > 0) {
  //     res.status(400).json(results);
  //     console.log(results);
  //   } else {
  //     console.log("Pas de données");
  //   }
  // });
  res.status(200).send("Hello World!");
});
// app.post('/', (req, res) => {
//     res.status(200).send('Hello World!')
// })
// app.put('/', (req, res) => {
//     res.status(200).send('Hello World!')
// })
// app.delete('/', (req, res) => {
//     res.status(200).send('Hello World!')
// })
module.exports = app;
