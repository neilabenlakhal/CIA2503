//var mysql = require('mysql2');
//use mysql2 instead of mysql
//install mysql2 instead of mysql 
//npm un mysql && npm i mysql2
/* var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cis2503cis2503"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
}); */




var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sqluser",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
