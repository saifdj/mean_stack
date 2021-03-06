var express = require('express');

// console.log("express is created as "+ express);
var app = express();

//used to route, same as app.get
var eventRouter = require("./src/routes/eventRoutes");

var dbRouter = require("./src/routes/dbRoutes");

//this is to set the static directory, request check for files in static directory first, if not found then looks at other path specified in app.get
app.use(express.static("public/bootstrap_templates/nice_to_meet_you/"));///bootstrap_templates/nice_to_meet_you

//use "bower upgrade" to update bower components
app.use(express.static("bower_components"));//now remove references to core bootstrap & jquery in index.html ( vendor/bootstrap/js/bootstrap.min.js should be removed and pointed to bower_components/bootstrap/XXXXXXX appropriate path, already done in index.html, search for core and see the changes) 


//now we added one more static dir, when request comes in express look in nice_to_meet_you, if not found then look into views 
// app.use(express.static("src/views"));

app.set("views", "./src/views"); //same as app.use
app.set("view engine", "ejs"); //view engine for our app is ejs, it is light weight node templating engine



app.use("/events", eventRouter); //uses eventRouter when url has /events, case-insensitive here

app.use("/DB", dbRouter); //asking express to use dbRouter when url has /DB extension, not case specific

app.get("/", function (req, response) {

    //you can make a hit to the server which we exstablished at port 8000, opening http://127.0.0.1:8000/ in browser, this call back will be executed and response.send string will be visible in browser

    console.log("got a request from client browser");
    // response.send("Sending this string as response to client/browsers request");
    response.render("index", {
        "prarms_for_ejs": ["saif", "mobile app dev", "mean", "node"],
        "nav_elements": [{
            "text": "Services", "link": "services"
        },
        { "text": "Portfolio", "link": "portfolio" },
        { "text": "About", "link": "about" },
        { "text": "Team", "link": "team" },
        { "text": "Contact", "link": "contact" },
        { "text": "Events", "link": "events" }
        ]

    });
});


app.listen(8000, function (err) {
    //you can kill all node established servers by typing "killall -9 node" in terminal, this is fix for "EADDRINUSE" error
    console.log("the server is listening at 8000");
});



