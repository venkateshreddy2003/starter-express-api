const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const username = process.env.username ?? "unu";
const password = process.env.password ?? "unp";
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send(`Yo! ${username}   ${password}`);
});
app.listen(process.env.PORT || 3000);
