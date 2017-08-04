
var express = require('express');

var eventRouter = express.Router();

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



eventRouter.route("/").get(function (req, response) {
    //response.send("Events");
    response.render("events", {
        "prarms_for_ejs": ["saif", "mobile app dev", "mean", "node"],
        "nav_elements": [{
            "text": "Services", "link": "services"
        },
        { "text": "Portfolio", "link": "portfolio" },
        { "text": "About", "link": "about" },
        { "text": "Team", "link": "team" },
        { "text": "Contact", "link": "contact" },
        { "text": "Events", "link": "events" }
        ],
        "events_data": eventsData

    });
}); //it can also be a .post


eventRouter.route("/:id").get(function (req, response) {
    // response.send("Single Event");
    var id = req.params.id //fetching id from description hyper link
    response.render()
    
}); //it can also be a .post, executes when hit has /events/event


module.exports = eventRouter;