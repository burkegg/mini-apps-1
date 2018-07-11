const mysql = require('mysql');

connection = mysql.createConnection({
  database: 'checkout',
  host: 'localhost',
  password: 'password',
  user: 'root',
})

connection.connect();
console.log('Attempting to connect to database...');

var allFromDB = function(){
  connection.query('select * from accounts', function(error, data) {
    if (error) {
      console.log('error connecting from dbmanager');
      return;
    }
    console.log('connected in dbmanager');
    console.log(data);
  })
}

var str = "insert into accounts (name, email, pass, add1, add2, city, state, zip, phone, card, exp, cvv, zip2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
var someParams = ['SOMENAME', 'anemeail', 'somepass', 'someadd1', 'secondline', 'thecity', 'thestate', 43324, '5101231234', '44444444444', '12/01/21', 123, 242424];

//var str_hard_coded = "insert into accounts (name, email, pass, add1, add2, city, state, zip, phone, card, exp, cvv, zip2) VALUES ('BOB', 'bob@email', 'secret', '1600 Penn Ave', 'basement', 'Winchester', 'VA', 24601, '5101231234', '4444444444444444', '12/01/21', 123, 24602)";
connection.query(str, someParams, function(error){
  if (error){
    console.log('error writing to database: ', error);
    return;
  }
  allFromDB();
});

module.exports.allFromDB = allFromDB;