var forever = require('forever');

  var child = new (forever.Forever)('server.js', {
    max: 3,
    silent: true,
    options: []
  });

  child.on('exit', this.callback);
  child.start();

//trying out Forever for server 
var express = require('express');
var app = express();

app.configure(function() {
	app.use(express.compress());
	app.set("views", __dirname + "/views");
	app.set("view engine", "ejs");
	app.use(express["static"] (__dirname + "/static"));
	app.use(app.router);
});

app.get("/", function(req,res) {
	res.render("index.ejs");
});

app.listen(80);
console.log('Listening on port 80');
