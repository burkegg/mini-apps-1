const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const html = require('http');
const path = require('path');
var db = require('../db/dbAPI')

var data = [];
var csvData = '';
app.use(bodyParser.json());
var counter = 1;

app.use(function(req, res, next){
  console.log(req.method, '  ', req.path);
  next();
})
 
app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/', express.static(path.join(__dirname, '../node_modules/jquery/dist/')));

var flatten = function(obj) {
  let str = '';
  for (let key in obj){
      if (key !== 'children') {
          str += obj[key].toString() + ',';
      }
  }
  str = str.slice(0, str.length-1);
  str = counter.toString() + '  ' + str + '&&&';
  counter++;
  if (obj.children) {
      for (let idx = 0; idx < obj.children.length; idx++) {
          str += flatten(obj.children[idx]);
      }
  }
  return str;
} 
  
  

var toArray = function(csvStr) {
  let arrayOut = [];
  arrayOut = csvStr.split('&&&');
  return arrayOut;
}










app.get('/data', (req, res) => {
  //res.send(data)
  db.getAll(function(err, data){
    if (err){
      console.log('error getting');
      return;
    }
    res.send(data);
  })
});

app.post('/data', (req, res) => {
  data.push(req.body);
  csvData += flatten(req.body);
  data = toArray(csvData);
  db.add(csvData, function(error, data){
    if (error){
      console.log('error');
      return;
    }
    res.sendStatus(201);
  })
  res.send(' posted ?', 201);
});


app.listen(3000, () => console.log('listening on 3000'));