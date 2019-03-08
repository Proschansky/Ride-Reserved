var moment = require('moment');

module.exports = function(sequelize, DataTypes) {
    var drivers = sequelize.define("Drivers", {
<<<<<<< HEAD
      name: DataTypes.STRING,
      primaryLanguage: DataTypes.STRING
    });
=======
      name: {
        type: DataTypes.STRING,
        // AllowNull is a flag that restricts a todo from being entered if it doesn't
        // have a text value
        allowNull: false,
        // len is a validation that checks that our todo is between 1 and 140 characters
        validate: {
          len: [1, 50]
        }
      },
      interests: {
        type: DataTypes.TEXT,
        validate: {
          len: [1,1000]
        }
      },
      aboutMe: {
        type: DataTypes.TEXT,
        validate: {
          len: [1,500]
        }
      },
      languages:{
        type: DataTypes.STRING,
        validate: {
          len: [1,1000]
        }
      },
      availableStartDate: {
        type: DataTypes.INTEGER,
      },
      availableEndDate: {
        type: DataTypes.INTEGER,
      },
      availableDateRange: {
        type: DataTypes.RANGE,
        range: {
          inclusive: [true,true]
      }

    }
  });
>>>>>>> 914c4477fd2f4b0d41b5d43e4897500e3cf6a5de
    return drivers;
  };
