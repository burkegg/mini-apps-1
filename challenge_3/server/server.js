const express = require('express');
const app = express();
const dbApi = require('../db/api');
const bodyParser = require('body-parser');
const http = require('http');
var jsonParser = bodyParser.json();


app.get('/', function(req, res) {
  res.send('hello');
});

app.post('/data', function(req, res) {
  if (!req.body) return res.sendStatus(400);
  dbApi.addEntry(testData);
  res.send('Received data ', req.body);
});
 
app.listen(3000, function(){
  console.log("Listening on 3000...");
});

let testData = {
name: 'SOMENAME',
email: 'anemeail',
password: 'somepass',
add1: 'someadd1',
add2: 'secondline',
city: 'thecity',
state: 'thestate',
zip: 43324,
phone: '5101231234',
card: '44444444444',
exp: '12/01/21',
cvv: 123,
zip2: 242424
};