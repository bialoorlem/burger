const Sequelize = require('sequelize');

let burger = sequelize.define('burger', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  devoured: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  // options
});