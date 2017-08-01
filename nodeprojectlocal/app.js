var express = require('express');
console.log("express is created as "+ express);
var expressInstance = express()
expressInstance.listen(8080, function(err) {
    console.log("the server is listening at 8080");
});