const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const html = require('http');
const path = require('path');
var sampleOutput = `firstName,lastName,county,city,role,sales \n
'Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000 \n
Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000 \n
Smitty,Won,San Mateo,Redwood City,Sales Person,4800000 \n
Allen,Price,San Mateo,Burlingame,Sales Person,2500000 \n
Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000`


var data = [];
var csvData = '';
app.use(bodyParser.json());


app.use(function(req, res, next){
  console.log(req.method, '  ', req.path);
  next();
})
 
var flatten = function(obj) {
    let str = '';
    for (let key in obj){
        if (key !== 'children') {
            str += obj[key].toString() + ',';
        }
    }
    str = str.slice(0, str.length-1);
    str = str + '\n';
    if (obj.children) {
        for (let idx = 0; idx < obj.children.length; idx++) {
            str += flatten(obj.children[idx]);
        }
    }
    return str;
}


app.get('/', (req, res) => res.send(csvData));

app.post('/', (req, res) => {
  console.log('************ req.body', req.body);
  data.push(req.body);
  csvData += flatten(req.body);
  //console.log('------------ body', req);
  res.send(' posted ?', 201);
});


app.listen(3000, () => console.log('listening on 3000'));