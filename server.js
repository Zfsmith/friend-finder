// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/public'));

var htmlRoutes = require("./routing/htmlRoutes")(app,path,express,bodyParser);
var apiRoutes = require("./routing/apiRoutes")(app,path,express,bodyParser);



// Sets up the Express App
// =============================================================
//

// Sets up the Express app to handle data parsing


app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});
