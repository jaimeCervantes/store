var express = require('express');
var wagner = require('wagner-core');
var bodyParser = require('body-parser');
var path = require('path');

//First I connect to the database and create the schema design
require('./models.js')(wagner);

var app = express();

app.set('port', process.env.PORT || 5000 );

app.use(function(req, res, next) {
  res.append('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.append('Access-Control-Allow-Credentials', 'true');//its ok to accept cookies on cross origin requests
  res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST']);
  res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(require('morgan')('dev'));

app.use( '/', express.static( path.resolve( __dirname, 'public/admin') ) );

app.get('/products', wagner.invoke(function(Product){
		return function(req, res){
			Product.find({}).exec(function(error, docs){
				if(error){
					console.log(error);
					res.json(error);
				}
				res.json(docs);
			});
		};
	}) );

app.listen(app.get('port'), function(){
	console.log('Web server listening on port: ' + app.get('port') );
});