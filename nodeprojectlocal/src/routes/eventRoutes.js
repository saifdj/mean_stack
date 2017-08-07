
var express = require('express');

var eventRouter = express.Router();

var mongodb = require("mongodb").MongoClient;


eventRouter.route("/").get(function (req, response) {
    //response.send("Events");



    var url = "mongodb://localhost:27017/eventsData";
    mongodb.connect(url, function (err, db) {


        var collection = db.collection("events");
        collection.find({}).toArray(function (err, results) {



            response.render("events", {
                "prarms_for_ejs": ["saif", "mobile app dev", "mean", "node"],
                "nav_elements": [
                    { "text": "Services", "link": "services" },
                    { "text": "Portfolio", "link": "portfolio" },
                    { "text": "About", "link": "about" },
                    { "text": "Team", "link": "team" },
                    { "text": "Contact", "link": "contact" },
                    { "text": "Events", "link": "events" }
                ],
                "events_data": results

            });

        }); //find({}) fetches all the records in collection, "results" is results of fetch
    });



}); //it can also be a .post


eventRouter.route("/:id").get(function (req, response) {
    // response.send("Single Event");
    var idValue = req.params.id //fetching id from description hyper link
    response.render("event", {  //ejs file name to load and params json dict, params are accessible in .ejs by key name in json dict
        "prarms_for_ejs": ["saif", "mobile app dev", "mean", "node"],
        "nav_elements": [
            { "text": "Services", "link": "services" },
            { "text": "Portfolio", "link": "portfolio" },
            { "text": "About", "link": "about" },
            { "text": "Team", "link": "team" },
            { "text": "Contact", "link": "contact" },
            { "text": "Events", "link": "events" }
        ],
        "events_data": eventsData[idValue] //passing the selected event

    });

}); //it can also be a .post, executes when hit has /events/event


module.exports = eventRouter;