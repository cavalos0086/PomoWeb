var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
})); 

// application
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 8000;

app.listen(port);
console.log("App listening on",port);