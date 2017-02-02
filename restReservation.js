var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// routes

// route for
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});