module.exports = function(sequelize, DataTypes) {
    var drivers = sequelize.define("Drivers", {
      name: DataTypes.STRING,
      primaryLanguage: DataTypes.STRING
    });
    return drivers;
  };
