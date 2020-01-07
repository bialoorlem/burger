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


// const express = require("express");

// const db = require("../db");

// const app = express();
// const PORT = process.env.PORT || 8080;

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));

// // Routes
// const API = require("./routes/apiRoutes");
// API.api(app);

// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

// module.exports = app;
