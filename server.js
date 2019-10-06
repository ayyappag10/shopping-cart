const express = require("express");
var path = require("path");


const app = express();

app.get("/data/products", function(req, res) {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

app.get("/complement", function(req, res) {
  res.json([{
    id: 1,
    name: "Hiccup",
    password: 'hiccup'
  }, {
    id: 2,
    name: "King Arthur",
    password: 'king-arthur'
  }]);
});


app.listen(4000);
console.log("listening on http://localhost:4000");