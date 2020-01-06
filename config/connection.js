const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",

    // Port server
    port: 4040,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection