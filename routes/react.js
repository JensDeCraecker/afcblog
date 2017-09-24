var express = require("express");
var react = express.Router();

react.get("/react", function(request, response) {
  response.render("react", {

  });
});


module.exports = react;
