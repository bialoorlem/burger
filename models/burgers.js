//Received help from tutor, Michell


module.exports = function(sequelize, DataTypes) {
  const burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: true,
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
  return burgers;
};