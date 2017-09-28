var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'review'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM groceries', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var insertOne = function(description, quantity, callback) {
  connection.query('INSERT INTO groceries (description, quantity) values (?, ?)', [ description, quantity ], function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
