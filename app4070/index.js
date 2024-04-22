const express = require("express");
const app = express();

const welcomeMessage = '{ "response": "Hello, Welcome to App4070" }';
const helloMessage = '{ "response": "This is Assignment 2" }';
const readyMessage = '{ "response": "It is Done" }';

app.get("/", function (req, res) {
  res.send(welcomeMessage);
});

app.get("/will", function (req, res) {
  res.send(helloMessage);
});

app.get("/ready", function (req, res) {
  res.send(readyMessage);
});

// Listen on port 3000 by default or use the PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("App listening on port " + port + "!");
});

module.exports = app;
