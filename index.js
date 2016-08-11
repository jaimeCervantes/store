var express = require('express');
var wagner = require('wagner-core');
var bodyParser = require('body-parser');
var path = require('path');

//First I connect to the database and create the schema design
require('./models.js')(wagner);

var app = express();

app.set('port', process.env.PORT || 5000 );

app.use(require('morgan')('dev'));

app.use( express.static( path.resolve( __dirname, 'public') ) );

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