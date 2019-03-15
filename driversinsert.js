const dummyDrivers = require('./dummyDrivers').getDrivers();
// const DataTypes = require('sequelize/lib/data-types');
var Sequelize = require("sequelize");
const db = require('./models');
const Drivers = db.Drivers;
// const driverpic = require('./public/img/driverpic');
// var env = process.env.NODE_ENV || "development";
require('dotenv').config();

var locations = ["NYC", "LA", "DC", "CHI", "ATL", "DNV", "BOST", "NSH",
    "SEA", "SF", "ORL", "DAL", "HOU", "MIA", "STL", "NO"];

console.log(locations.length);

function addALocation(){
    var randomLocation = locations[Math.floor(Math.random() * (locations.length + 1))];
    return randomLocation
}

const newLocation = async (index) => {
    const randomLocation = await addALocation()
    try {
        InsertLocation(randomLocation, index)
    } catch (error) {
        console.error(error)
    }
}

function InsertLocation(location, index) {
    Drivers.update({
        currentLocation: location ,
    }, {
            where: {
                id: index
            }
        });
}

// console.log(randomLocation);
// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
var sequelize = new Sequelize(process.env.database, process.env.name, process.env.password, { host: 'localhost', dialect: 'mysql' });

const axios = require('axios')

const url = "https://randomuser.me/api/";
const AxiosGet = async () => {
    try {
        return await axios.get(url)
    } catch (error) {
        console.error(error)
    }
}
const DriverPic = async (index) => {
    const pics = await AxiosGet()
    try {
        InsertPic(pics.data.results[0].picture.medium, index)
    } catch (error) {
        console.error(error)
    }
}

function InsertPic(pictureUrl, index) {
    Drivers.update({
        picture: pictureUrl,
    }, {
            where: {
                id: index
            }
        });
}

function insertDrivers() {
    // dummyDrivers.forEach(function(driver) {
    // console.log(driver.interests)
    db.sequelize.sync({ force: true }).then(function () {
        for (let i = 0; i < dummyDrivers.length; i++) {
            Drivers.findOrCreate({
                where: { name: dummyDrivers[i].name }, defaults: {
                    interests: dummyDrivers[i].interests,
                    aboutMe: dummyDrivers[i].aboutMe,
                    languages: dummyDrivers[i].languages,
                    availableStartDate: dummyDrivers[i].availableStartDate,
                    availableEndDate: dummyDrivers[i].availableEndDate,
                }
            }).catch(function (err) {
                console.log('Error: ', err)
            })
           
            DriverPic(i);
            newLocation(i);
        }
    }
    )
    
}

insertDrivers()