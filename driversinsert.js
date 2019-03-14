const dummyDrivers = require('./dummyDrivers').getDrivers();
// const DataTypes = require('sequelize/lib/data-types');
var Sequelize = require("sequelize");
const db = require('./models');
const Drivers = db.Drivers;
// var env = process.env.NODE_ENV || "development";
require('dotenv').config();

var locations = ["New York City, NY", "Los Angeles, CA", "Chicago, IL", "Atlanta, GA", "Denver, CO", "Boston, MA", "Nashville, TN",
"Seattle, WA", "San Francisco, CA", "Boise, ID", "Twin Cities, MN", "Orlando, FL", "Hartford, CT", "Memphis, TN","Dallas, TX", "Houston, TX", "Raleigh-Durham, NC", "Miami, FL", "St. Louis, MO", "Kansas City, MO/KS"];

var randomLocation = locations[Math.floor(Math.random * (locations.length + 1))];

// console.log(randomLocation);
// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
var sequelize = new Sequelize(process.env.database, process.env.name, process.env.password, {host: 'localhost', dialect: 'mysql'});


function insertDrivers() {
    // dummyDrivers.forEach(function(driver) {
    // console.log(driver.interests)
    console.log('Hello World')
    db.sequelize.sync({force: true}).then(function(){
    
    for(i=0;i<dummyDrivers.length;i++){
    Drivers.findOrCreate({
        where: { name: dummyDrivers[i].name}, defaults: {
            interests : dummyDrivers[i].interests,
            aboutMe: dummyDrivers[i].aboutMe,
            languages: dummyDrivers[i].languages,
            availableStartDate: dummyDrivers[i].availableStartDate,
            availableEndDate: dummyDrivers[i].availableEndDate,
            currentLocation: randomLocation
        }
    })
    .catch(function (err) {
       console.log('Error: ', err)
    })
    .then(function (session) {
        console.log('User added!!');
        // return getUser(session.user_id);
    })
}
    })
// })

    // console.log(Drivers)
}
        /*Drivers
            .findOrCreate({
                where: { username: dummyDrivers.drivers[i].name }, defaults: {
                    interests: dummyDrivers.drivers[i].interests,
                    aboutMe: dummyDrivers.drivers[i].aboutMe,
                    languages: dummyDrivers.drivers[i].languages,
                    availableStartDate: dummyDrivers.drivers[i].availableStartDate,
                    availableEndDate: dummyDrivers.drivers[i].availableEndDate,
                }
            }).catch(function (err) {
                next(new Error('DB not found'));
            })
            .then(function (session) {
                return getUser(session.user_id);
            })
            .spread((user, created) => {
                console.log(user);
                console.log(created);
            })
    }
    console.log(Drivers);
    */

insertDrivers()