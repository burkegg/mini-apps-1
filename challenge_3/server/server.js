const express = require('express');
const app = express();
const dbApi = require('../db/api');
const bodyParser = require('body-parser');

app.get('/', function(req, res) {
  res.send('hello');
})

 
app.listen(3000, function(){
  console.log("Listening on 3000...");
})