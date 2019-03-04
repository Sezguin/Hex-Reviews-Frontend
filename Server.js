var express = require('express')
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = 4600;

// Adding all HTML files.
app.get("/AddGamePage", function(req, res) {
    res.sendFile(__dirname + "/HexReviewsAddGamePage.html");
});
app.get("/ViewGamesPage", function(req, res) {
    res.sendFile(__dirname + "/HexReviewsViewGamesPage.html");
});

// Adding all CSS files.
app.get("/CSS/CommonStylesheet.css", function(req, res) {
    res.sendFile(__dirname + "/CSS/CommonStylesheet.css");
});
app.get("/CSS/HexReviewsAddGamePageStylesheet.css", function(req, res) {
    res.sendFile(__dirname + "/CSS/HexReviewsAddGamePageStylesheet.css");
});
app.get("/CSS/HexReviewsViewGamesPageStylesheet.css", function(req, res) {
    res.sendFile(__dirname + "/CSS/HexReviewsViewGamesPageStylesheet.css");
});

// Adding all JavaScript files.
app.get("/Logic/CommonLogic.js", function(req, res) {
    res.sendFile(__dirname + "/Logic/CommonLogic.js");
});
app.get("/Logic/HexReviewsAddGamePageLogic.js", function(req, res) {
    res.sendFile(__dirname + "/Logic/HexReviewsAddGamePageLogic.js");
});
app.get("/Logic/HexReviewsViewGamesPageLogic.js", function(req, res) {
    res.sendFile(__dirname + "/Logic/HexReviewsViewGamesPageLogic.js");
});

// Listening for connectinos on appropriate port.
server.listen(port, function(){
  console.log("Solar System Quiz server is listening on port: " + port + "...");
});
