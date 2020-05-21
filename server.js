const path = require("path");
const express = require("express");

const app = express();
const portNumber = 3000;

app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile('home.html', { root: path.join(__dirname, "public") });
});


app.use(function(req, res, next){
  res.status(404);

  console.log('Request: [GET]', req.originalUrl)
  res.sendFile('404.html', { root: path.join(__dirname, "public") });
});


app.listen(portNumber);
console.log(new Date().toLocaleString("pl-PL", { hour12: false }) + ", starting server on port:", portNumber);