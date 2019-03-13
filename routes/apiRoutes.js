var db = require("../models");

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
      console.log("working from post route");
      res.json(data);
    });
  });


};
