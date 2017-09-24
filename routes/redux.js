var express = require("express");
var redux = express.Router();

redux.get("/redux", function(request, response) {
  response.render("redux", {

  });
});


module.exports = redux;
