var express = require("express");
var reactnative = express.Router();

reactnative.get("/reactnative", function(request, response) {
  response.render("reactnative", {

  });
});


module.exports = reactnative;
