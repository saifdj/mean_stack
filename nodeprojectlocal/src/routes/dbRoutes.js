
var express = require('express');

var dbRouter = express.Router();

///*
//
//as we are using mongodb in node project we need to install mongodb into project directory using "npm install mongodb --save"
//Mongo db can be instlled in Machine Root Directory either by downloading zip from https://www.mongodb.com/download-center#production, or by using "brew" package manager by using "brew install mongodb", see https://treehouse.github.io/installation-guides/mac/mongo-mac.html 
//
///*



dbRouter.route("/AddDataToDB").get(function (req, response) { //route path AddDataToDB is not case specific

    response.send("Successfully routed to DB Router");
});


module.exports = dbRouter