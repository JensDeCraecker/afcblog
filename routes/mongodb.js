var express = require("express");
var mongodb = express.Router();

mongodb.get("/mongodb", function(request, response) {
  response.render("mongodb", {

  });
});

module.exports = mongodb;
