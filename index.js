var express = require('express');
var app = express();


var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/CristianAvalos';

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
})); 

// app configuration
app.use(express.static(__dirname+'/public'));
app.use('/node_modules', express.static(__dirname +'/node_modules'));
var port = process.env.PORT || 8000;

app.listen(port);
console.log("App listening on",port);



// application database
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});



var client = new pg.Client(connectionString);
client.connect();

var query = client.query('DROP TABLE IF EXISTS toDoItems');
var query1 = client.query('CREATE TABLE toDoItems(id SERIAL PRIMARY KEY, title varchar(200), description varchar(500), numPomodoros integer)');

query1.on('end', function(){
	client.end();
});


// Routing:
app.post('/db/addTodo', function(req, res){
	var data = req.body;
});

app.put('/db/editTodo', function(req, res){

});

app.post('/db/deleteTodo', function(req, res){

});

app.get('/db/retrieveList', function(req, res){
	var results = [];

	pg.connect(connectionString, function(err, client, done){
		if(err){
			return res.status(500).json({success:false, data:err});
		}

		var query = client.query("SELECT * FROM toDoItems");

		query.on('row', function(row){
			results.push(row);
		});

		query.on('end', function(){
			done();
			return res.json(results);
		})

	})
});






