const Moment = require('moment');
const MomentRange = require('moment-range')
var dummyDrivers = require('./dummyDrivers.js');
var start = new Date();
var end   = new Date();
const moment = MomentRange.extendMoment(Moment);

console.log(dummyDrivers);

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
  })

  for (i in dummyDrivers){
    start = dummyDrivers.availableStartDate[i];
    end = dummyDrivers.availableEndDate[i];
    Drivers
    .findOrCreate({where: {username: dummyDrivers.name[i]}, defaults: {
      interests: dummyDrivers.interests[i],
      aboutMe: dummyDrivers.aboutMe[i],
      languages: dummyDrivers.languages[i],
      availableStartDate: dummyDrivers.availableStartDate[i],
      availableEndDate: dummyDrivers.availableEndDate[i],
      availableDateRange: moment.range(start, end)
    }}).spread((user, created) => {
      console.log(user);
      console.log(created);
  })
  }
  
  return Drivers;
  };

const range = moment.range(start, end)
    