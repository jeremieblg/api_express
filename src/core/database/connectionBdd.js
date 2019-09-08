const mysql = require("mysql");
const bdd = mysql.createConnection({
  database: process.env.DATA_BASE,
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB
});
module.exports = bdd;