var express = require('express');
var bodyParser = require('body-parser')
var mysql      = require('mysql');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));







app.get('/getInfo', function(request, response) {
var connection = mysql.createConnection({
  host     : 'sql11.freemysqlhosting.net',
  user     : 'sql11219062',
  password : 'jYEteHwenl',
  database : 'sql11219062'
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
	// unable to test for null conditions since the function did not work
	
	var emis = req.body.emis;
	var centre = req.body.centre_number;
	var name = req.body.name;
	var wrote14 = req.body.wrote_14;
	var passed14 = req.body.passed_14;
	var wrote15 = req.body.wrote_15;
	var passed15= req.body.passed_15;
	var wrote16 = req.body.wrote_16;;
	var passed16 = req.body.passed_16;
	var rate14 = 100 * req.body.passed_14 / req.body.wrote_14 ;
	var rate15 = 100 * req.body.passed_15 / req.body.wrote_15;
	var rate16 = 100 * req.body.passed_16 / req.body.wrote_16;
	var connection = mysql.createConnection({
  host     : 'sql11.freemysqlhosting.net',
  user     : 'sql11219062',
  password : 'jYEteHwenl',
  database : 'sql11219062'
});
	
	var sql = "INSERT INTO matric VALUES  ?"; 
	var values = [emis, centre, name, wrote14, passed14, wrote15, passed15, wrote16, passed16, rate14, rate15,rate16];
	 connection.query(sql,values, function (err, result) {
		 
    if (err) throw err;
    console.log(req);
	
  });

});



app.get('/', function(request, response) {
  response.render('pages/home');
});
app.get('/index', function(request, response) {
  response.render('pages/index');
});





app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});