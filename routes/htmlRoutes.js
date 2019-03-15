var db = require("../models");
var path = require('path');
var drivers = require('../models/drivers');
const Sequelize = require('sequelize');

module.exports = function(app) {
  // Load index page
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../profile/main.html"));
      });

  app.get("/profile/profile", function(req, res) {
      res.sendFile(path.join(__dirname, "../profile/profile.html"));
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// const sequelize = new Sequelize('RideReserved', process.env.name, process.env.password, {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// console.log(db.Drivers);


