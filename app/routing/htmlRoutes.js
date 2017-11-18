var path = require("path");

module.exports = function(app) {
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });
 // sets home as a default if no matches are found
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};