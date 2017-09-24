var express = require("express");
var post = express.Router();

post.get("/post", function(request, response) {
  response.render("post", {
    posts: postsFile.blogposts
  });
});

module.exports = post;
