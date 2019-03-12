var db = require("../models");
var path = require('path');
var drivers = require('../models/drivers');
const mysql = require("mysql");

module.exports = function(app) {
  // Load index page
  app.get("/test", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/profile/profile", function(req, res) {
      res.sendFile(path.join(__dirname, "../profile/profile.html"));
  });

  app.get("/profile/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../profile/mainProfile.html"));
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

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "RideReserved",
  password : ''
});


console.log(db.Drivers);


