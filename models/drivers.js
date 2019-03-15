// const Moment = require('moment');
// const MomentRange = require('moment-range')
// var dummyDrivers = require('./dummyDrivers.js');
// var start = new Date();
// var end   = new Date();
// const moment = MomentRange.extendMoment(Moment);

module.exports = function(sequelize, DataTypes) {
    var Drivers = sequelize.define("Drivers", {
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
        type: DataTypes.DATEONLY,
      },
      availableEndDate: {
        type: DataTypes.DATEONLY,
      },
      currentLocation: {
        type: DataTypes.STRING
      },
      picture: {
        type: DataTypes.STRING
      }
  });
  return Drivers;
};
 
    