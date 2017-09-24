var express = require("express");
var node = express.Router();

node.get("/node", function(request, response) {
  response.render("node", {

  });
});


module.exports = node;
