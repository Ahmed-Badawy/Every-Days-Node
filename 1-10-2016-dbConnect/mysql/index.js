// npm i -D mysql

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'courtaks_testproject'
});

var table = 'maintable';


connection.connect();
connection.query(`SELECT * from ${table} limit 0,1`, function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});
connection.end();