var express = require('express');
const path = require('path'); // use the pre-installed path module
var mysql = require('mysql');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: 'password',
    database: "mydb"
});
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.post('/submit-student-data', function(req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    var address = req.body.Address;

    var sql = `INSERT INTO person (name, address) VALUES ("${name}", "${address}")`;

    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log('record inserted');
    });

    res.send(name + address + ' Submitted Successfully!');
    res.redirect('/');
});
var server = app.listen(5000, function() {
    console.log('Node server is running..');
});