const db = require('./index');

var getAll = function(cb){
  db.query('select * from works', function(err, data){
    if (err) {
      cb(err);
      return;
    }
    console.log('data in get ', data);
    cb(null, data);
  });
};

var add = function(item, cb) {
  var que = ('INSERT INTO works (work) VALUES (?)');
  db.query(que, [item], cb);
}

module.exports = {
  getAll,
  add,
}