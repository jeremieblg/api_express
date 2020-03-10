import * as express from "express";
import { app } from "./app";
import chalk from "chalk";
import * as emoji from "node-emoji";
import { Request, Response } from "express";
const app = express();
const { PORT = 3000 } = process.env;
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world"
  });
});
app.listen(PORT, () => {
  console.log(
    emoji.get("heavy_check_mark") +
      chalk.white.bgGreen.bold("API START") +
      " " +
      chalk.blue.underline("http://localhost:" + PORT)
  );
});

// var URL = "http://localhost:" + process.env.PORT;

// app.listen(process.env.PORT, () => {
//
// });
