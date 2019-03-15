var db = require("../models");
var path = require('path');
const Sequelize = require('sequelize');

module.exports = function(app) {
  // Load index page


  app.get("/test", function(req, res){
    
    db.Riders.findOne({
      where: {
        id: 1
      }
    }).then(function(results){
      msg = results.name
      location = 
      console.log(msg)
      res.render("index", {msg})
    })

    db.Drivers.findAll({
      where: {
        currentLocation: "Atlanta, GA"
      }
    }).then(function(dbData){

      res.render("index", {dbData})
    });

    db.Riders.findOne({
      where: {
        id: 1
      }
    }).then(function(results){
      msg = results.name
      console.log(msg)
      res.render("index", {msg})
    })
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

