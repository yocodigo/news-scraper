// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var cheerio = require("cheerio");

// SETS UP THE EXPRESS APP
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// =============================================================

// SETS UP MONGOOSE
// =============================================================
// Using es6 js promise
mongoose.Promise = Promise;

// Mongoose (orm) connects to our mongo db and allows us to have access to the MongoDB commands for easy CRUD 
mongoose.connect("mongodb://localhost/articleFeed");
var db = mongoose.connection;

// Display error in the console if an error occurs during mongoose connection attempt
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Display confirmation of connection to Mongoose
db.once("open", function () {
  console.log("Mongoose connection successful.");
});
// =============================================================

// SETS UP THE VIEWS
// =============================================================
// Static directory
app.use(express.static("public"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// =============================================================

// ROUTES
// =============================================================
require("./controller/routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});