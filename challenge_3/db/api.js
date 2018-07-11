const db = require('./dbmanager');
var someParams = ['SOMENAME', 'anemeail', 'somepass', 'someadd1', 'secondline', 'thecity', 'thestate', 43324, '5101231234', '44444444444', '12/01/21', 123, 242424];

var addEntry = db.addAccount(someParams);


// insert and select from database from here.

var getAll = db.allFromDB;

module.exports = {
  addEntry,
  getAll,
}