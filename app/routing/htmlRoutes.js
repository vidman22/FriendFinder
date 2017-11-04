var path = require("path");

module.exports = function(app) {
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
 // sets home as a default if not matches are found
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};