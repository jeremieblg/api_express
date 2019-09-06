//app.js
const express = require("express");
const app = express();
require("dotenv").config();
app.get("/", (req, res) => {
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
