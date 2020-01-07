//Pulled from Brad Traversy's GitHub and modified: https://github.com/bradtraversy/codegig/blob/master/models/Gig.js

const Sequelize = require('sequelize');
const db = require('../config/connection.js');

const burger = db.define('burger', {
  burgerName: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.STRING
  }
})

module.exports = burger;
