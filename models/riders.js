module.exports = function(sequelize, DataTypes) {
    var riders = sequelize.define("Riders", {
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
      requestedStartDate: {
        type: DataTypes.INTEGER,
      },
      requestedEndDate: {
        type: DataTypes.INTEGER,
      },
      requestedDateRange: {
        type: DataTypes.RANGE,
        range: {
          inclusive: [true,true]
      }

    }
  });
    return riders;
  };