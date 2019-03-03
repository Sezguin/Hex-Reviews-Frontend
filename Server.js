var express = require('express')
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = 4600;

// Adding all HTML files.
app.get("/AddGamePage", function(req, res) {
    res.sendFile(__dirname + "/HexReviewsAddGamePage.html");
});

// Adding all CSS files.
app.get("/HexReviewsAddGamePageStylesheet.css", function(req, res) {
    res.sendFile(__dirname + "/HexReviewsAddGamePageStylesheet.css");
});

// Adding all JavaScript files.
app.get("/HexReviewsAddGamePageLogic.js", function(req, res) {
    res.sendFile(__dirname + "/HexReviewsAddGamePageLogic.js");
});

// Listening for connectinos on appropriate port.
server.listen(port, function(){
  console.log("Solar System Quiz server is listening on port: " + port + "...");
});
