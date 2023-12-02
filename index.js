const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const config = process.env.secret;
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send(config?.key1 + " " + config?.key2);
});
app.listen(process.env.PORT || 3000);
