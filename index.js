const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const config = process.env.secret;
app.all("/", (req, res) => {
  console.log("Just got a request!");
  console.log(config);
  res.send(config);
});
app.listen(process.env.PORT || 3000);
