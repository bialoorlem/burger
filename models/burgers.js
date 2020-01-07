//Received help from tutor, Michell


module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    burger_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    
  },

  {

    timestamps: false

  }
  
  );
  return Burger;
};