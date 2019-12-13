var express = require('express');
var compression = require('compression');
var app = express();
 
app.use(compression());
app.use(express.static(__dirname + '/'));
 
app.listen(8088, function(){
    console.log("webserver listening!");
});