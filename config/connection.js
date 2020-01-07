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



const express = require("express");

const Sequelize = require('sequelize');

const PORT = process.env.PORT || 8080;

const app = express();

//Pulled from Sequelize's documentation


const sequelize = new Sequelize('burgers_db', 'root', 'root', {
  host: "localhost",
  port: 4040,
  dialect: "mysql"
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = connection