var express = require('express');
console.log("express is created as "+ express);
var expressInstance = express()

expressInstance.listen(8000, function(err) {
    //you can kill all node established servers by typing "killall -9 node" in terminal, this is fix for "EADDRINUSE" error
    console.log("the server is listening at 8000");
});


//this is to set the static directory, request check for files in static directory first, if not found then looks at other path specified in expressInstance.get
expressInstance.use(express.static("public/bootstrap_templates/nice_to_meet_you"));

expressInstance.get("/", function(req, response) {
  
    //you can make a hit to the server which we exstablished at port 8000, opening http://127.0.0.1:8000/ in browser, this call back will be executed and response.send string will be visible in browser

    console.log("got a request from client browser");
    response.send("Sending this string as response to client/browsers request");
});