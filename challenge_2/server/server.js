const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const html = require('http');
const path = require('path');

var data = [];
var csvData = '';
app.use(bodyParser.json());


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
  str = str + '&&&';
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


app.get('/data', (req, res) => res.send(data));

app.post('/data', (req, res) => {
  console.log('************ req.body', req.body);
  data.push(req.body);
  csvData += flatten(req.body);
  data = toArray(csvData);
  //console.log('------------ body', req);
  res.send(' posted ?', 201);
});


app.listen(3000, () => console.log('listening on 3000'));