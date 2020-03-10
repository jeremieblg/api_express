//server.js
const app = require("./app");
const chalk = require("chalk");
const emoji = require("node-emoji");

var URL = "http://localhost:" + process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(
    emoji.get("heavy_check_mark") +
      chalk.white.bgGreen.bold("API START") +
      " " +
      chalk.blue.underline(URL)
  );
});
