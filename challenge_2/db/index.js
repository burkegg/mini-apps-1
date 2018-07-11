const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mini1',
});

connection.connect( (err) => {
  if (err) {
    console.log('problem connecting to database');
    return;
  }
  connection.query('select work from works', function(err, data, fields){
    if (err) {
      console.log(err);
    } else {
      console.log('connected ')
    }
  })

})

module.exports = connection;