//Pulled from Brad Traversy's GitHub and modified: https://github.com/bradtraversy/codegig/blob/master/models/Gig.js



module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  return Burger;
};