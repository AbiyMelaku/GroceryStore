var express = require('express');
var bodyParser = require('body-parser');
var groceries = require('../database');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/groceries', function (req, res) {
  groceries.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/groceries', function (req, res) {
  let quantity = req.body.quantity !== undefined ? Number(req.body.quantity) : 1;
  let description = req.body.description;
 
  if(!description) {
    res.sendStatus(400);
  } else {
    groceries.insertOne(description, quantity, function(err, data) {
      if(err) {
        res.sendStatus(500);
      } else {
        res.json(data);
      }
    });
  }
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});