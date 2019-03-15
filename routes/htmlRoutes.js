var db = require("../models");
var path = require('path');
var drivers = require('../models/drivers');
const Sequelize = require('sequelize');

module.exports = function(app) {
  // Load index page


  app.get("/test", function(req, res){
    db.Drivers.findAll({
      where: {
        languages: "french"
      }
    }).then(function(dbData){
      console.log(dbData)
      res.render("index", {dbData})
    });
  });


  app.get("/profile/profile", function(req, res) {
      res.sendFile(path.join(__dirname, "../profile/profile.html"));
  });

  app.get("/profile/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../profile/main.html"));
});

app.get("/profile/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../profile/reserve.html"));
});


app.get("/profile/about", function(req, res) {
  res.sendFile(path.join(__dirname, "../profile/about.html"));
});

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

