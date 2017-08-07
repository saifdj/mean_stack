
var express = require('express');

var dbRouter = express.Router();

var mongodb = require("mongodb").MongoClient;

///*
//
//Need of installing Mongodb package in project: To get reference to mongodb client we need to install this package. As we are using mongodb in node project we need to install mongodb into project directory using "npm install mongodb --save"
//Mongo db can be instlled in Machine Root Directory either by downloading zip from https://www.mongodb.com/download-center#production, or by using "brew" package manager by using "brew install mongodb", see https://treehouse.github.io/installation-guides/mac/mongo-mac.html 
//Running Monogo Shell: shell is used to read/write data, to run mongo shell open terminal and type "mongo", this prints shell version, now type "db" to check in which db we are currently in.
//
///*



var eventsData = [
    {
        name: 'Event 1',
        description: 'Event 1 Description',
        date: '2017:07:04',
        time: '17:22',
        location: {
            street: '787 St Rod',
            city: 'Hyderabad',
            state: 'Telangana',
            zip: '505445'
        },
        capacity: 456
    },
    {
        name: 'Event 2',
        description: 'Event 2 Description',
        date: '2017:07:04',
        time: '17:22',
        location: {
            street: '787 St Rod',
            city: 'Hyderabad',
            state: 'Telangana',
            zip: '505445'
        },
        capacity: 456
    },
    {
        name: 'Event 3',
        description: 'Event 3 Description',
        date: '2017:07:04',
        time: '17:22',
        location: {
            street: '787 St Rod',
            city: 'Hyderabad',
            state: 'Telangana',
            zip: '505445'
        },
        capacity: 456
    },
    {
        name: 'Event 4',
        description: 'Event 4 Description',
        date: '2017:07:04',
        time: '17:22',
        location: {
            street: '787 St Rod',
            city: 'Hyderabad',
            state: 'Telangana',
            zip: '505445'
        },
        capacity: 456
    }
];


dbRouter.route("/AddDataToDB").get(function (req, response) { //route path AddDataToDB is not case specific

    // response.send("Successfully routed to DB Router");


    var url = "mongodb://localhost:27017/eventsData";
    mongodb.connect(url, function(err, db) {

        //mongodb holds records as "collections", SQL holds as "Tables"
        var collection = db.collection("events"); //creates collection if not present and returns empty collection
        collection.insertMany(eventsData, function(err, results) {

            response.send(results);
            db.close()
        });//func is called after insertion, "results" set contains objects we inserted along with new keys, say for eg., "_id" is added by mongo db for each object

    });//function should contain instructions to insert data, func has db reference in 2nd param & error as first param

});


module.exports = dbRouter