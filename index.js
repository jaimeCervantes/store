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

app.listen(app.get('port'), function(){
	console.log('Web server listening on port: ' + app.get('port') );
});