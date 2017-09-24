var express = require("express");
var path = require("path");
request = require('request-json');
var app = express();
var postsFile = require('./data/posts.json');
var pagesFile = require('./data/pages.json');
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'))

//required routes
app.use(require("./routes/mongodb"));
app.use(require("./routes/express"));
app.use(require("./routes/react"));
app.use(require("./routes/node"));
app.use(require("./routes/redux"));
app.use(require("./routes/reactnative"));
app.use(require("./routes/post"));

// Dit is de route naar de homepage.
app.get('/', function(req, res) {
  res.render("index", {
    posts: postsFile.blogposts
  });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
