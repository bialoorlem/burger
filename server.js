const express = require("express");

const Sequelize = require('sequelize');

const PORT = process.env.PORT || 8080;

const app = express();

// Option 1: Passing parameters separately
const sequelize = new Sequelize('burgers_db', 'root', 'root', {
  port: PORT,
username: "root",
password: "root",
database: "burgers_db",
    host: "127.0.0.1",
    "dialect": "mysql",
    "logging": false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


