//Pulled and modified from: https://github.com/bradtraversy/codegig/blob/master/app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/connection.js');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// Burger routes
app.use('/burgers.js', require('./models/burgers.js'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));