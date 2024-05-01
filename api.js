const path = require("path");
const express = require("express");

const api = express();

api.use(express.static(path.join(__dirname, "public")));

api.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = api;
