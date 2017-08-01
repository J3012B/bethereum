var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.get("/", function(req, res) {
	res.send("<h1>Welcome to Bethereum!</h1>");
});




app.listen(3000, function() {
	console.log("Bethereum server has started.");
});