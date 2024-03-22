var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('HCT23', '2023')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Customer created");
    });
});