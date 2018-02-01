var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mysql      = require('mysql');






app.get('/getInfo', function(request, response) {
var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  user     : 'bdfb4b0da12a21',
  password : '6dbffacf',
  database : 'heroku_92916039ae377d2'
});
  connection.query('SELECT * from matric', function(err, data) {
      if (err) {
        console.log('error: ', err);
        throw err;
      }
      response.send([data]);
    });
});



app.use(bodyParser.json());

app.get('/sendInfo', function(req, res){
  res.render('form');// if jade
  // You should use one of line depending on type of frontend you are with
  res.sendFile(__dirname + '/form.html'); //if html file is root directory
 res.sendFile("index.html"); //if html file is within public directory
});

app.post('/sendInfo', function(req, res){
	
	var emis;
	var centre;
	var name;
	var wrote14;
	var passed14;
	var wrote15;
	var passed15;
	var wrote16;
	var passed16;
	var rate14;
	var rate15;
	var rate16;
	response.send([res]);
	
	//var sql = "INSERT INTO matric (emis, centre_number) VALUES (500, 200)"; 
	 //connection.query(sql, function (err, result) {
		 
    //if (err) throw err;
    console.log(req);
	
  //});
  var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  user     : 'bdfb4b0da12a21',
  password : '6dbffacf',
  database : 'heroku_92916039ae377d2'
});
});



app.get('/', function(request, response) {
  response.render('pages/index');
});





app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});