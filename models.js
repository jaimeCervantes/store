var mongoose = require('mongoose');
var _u = require('underscore');
var Product = require('./models/product.js');
var Category = require('./models/category.js');

var models = {
	//models(nameOfModel, schema )
	//where nameOfModel is the singular name of the collection your model is for. So the name of your collection is: 
	//Product --> products
	//Category --> categories
	Product: mongoose.model('Product', Product),
	Category: mongoose.model('Category', Category)
};

module.exports = function(wagner) {

	//set the modules as services, so we can use them in other parts/files of the sytem
	_u.each(models, function(cModel, name ) {
		wagner.factory(name, function(){
			return cModel;
		});
	});

	return models;
};