var express = require('express');
console.log("express is created as "+ express);
var expressInstance = express()
expressInstance.listen(8000, function(err) {
    console.log("the server is listening at 8000");
});

expressInstance.get("/", function(req, response) {
  
    //you can make a hit to the server which we exstablished at port 8000, opening http://127.0.0.1:8000/ in browser, this call back will be executed and response.send string will be visible in browser

    console.log("got a request from client browser");
    response.send("Sending this string as response to client/browsers request");
});