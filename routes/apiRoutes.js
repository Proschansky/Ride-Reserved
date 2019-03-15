var db = require("../models");
var path = require('path');

module.exports = function(app) {
  // Get all examples
  app.get("/api/drivers", function(req, res) {
    db.Drivers.findAll({}).then(function(data) {
      console.log("working from get route");
      res.json(data);
    });
  });

  // Create a new example
  app.post("/api/riders", function(req, res) {
    console.log(req.body)
    db.Riders.create(req.body).then(function(data) {
     
      res.json(data)
    });
    // res.sendFile(path.join(__dirname, "../profile/main.html"));
  });

};


