(async function () {
    const dummyDrivers = require('./dummyDrivers').getDrivers();
    // const DataTypes = require('sequelize/lib/data-types');
    var Sequelize = require('sequelize');
    const db = require('./models');
    const Drivers = db.Drivers;
    // const driverpic = require('./public/img/driverpic');
    // var env = process.env.NODE_ENV || "development";
    require('dotenv').config();

    var locations = [
        'NYC',
        'LA',
        'DC',
        'CHI',
        'ATL',
        'DNV',
        'BOST',
        'NSH',
        'SEA',
        'SF',
        'ORL',
        'DAL',
        'HOU',
        'MIA',
        'STL',
        'NO',
    ];

    const newLocation = index => {
        const randomLocation = locations[Math.floor(Math.random() * (locations.length + 1))];

        InsertLocation(randomLocation, index);
    };

    function InsertLocation(location, index) {
        dummyDrivers[index].currentLocation = location;
    }

    // console.log(randomLocation);
    // if (config.use_env_variable) {
    //   var sequelize = new Sequelize(process.env[config.use_env_variable]);
    // } else {
    var sequelize = new Sequelize(process.env.database, process.env.name, process.env.password, {
        host: 'localhost',
        dialect: 'mysql',
    });

    const axios = require('axios');

    const url = 'https://randomuser.me/api/?results=1000';
    const pics = await axios.get(url);

    const DriverPic = index => {
        InsertPic(pics.data.results[index].picture.medium, index);
    };

    function InsertPic(pictureUrl, index) {
        dummyDrivers[index].picture = pictureUrl;
    }

    function insertDrivers() {
        for (let i = 0; i < dummyDrivers.length; i++) {
            DriverPic(i);
            newLocation(i);
        }
        db.sequelize.sync({ force: true }).then(function() {
            Drivers.bulkCreate(dummyDrivers)
                .then(function(dbDrivers) {
                    console.log('Drivers inserted: ' + dbDrivers.length);
                    db.sequelize.close();
                })
                .catch(function(err) {
                    console.log('Error: ', err);
                });
        });
    }

    insertDrivers();

})()