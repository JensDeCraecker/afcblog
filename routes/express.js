var express = require("express");
var expres = express.Router();

expres.get("/expres", function(request, response) {
  response.render("express", {

  });
});


module.exports = expres;
