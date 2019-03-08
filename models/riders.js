module.exports = function(sequelize, DataTypes) {
    var riders = sequelize.define("Riders", {
      name: DataTypes.STRING,
      requireNDA: DataTypes.BOOLEAN,
      preferredLanguage: DataTypes.STRING

    });
    return riders;
  };