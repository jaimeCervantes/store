var mongoose = require('mongoose');
var Category = require('./category.js');

var productSchema = {
	name: { type: String, required: true },
	description: {type: String, required: true },
	provider: {type: String},
	price: {
		amount: {type: Number, required: true},
		currency: {
			type: String,
			required: true,
			enum: ['MXN', 'USD', 'EUR']
		}
	},
	pictures: [{type: String, required: true}],
	category: Category.categorySchema
};

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;