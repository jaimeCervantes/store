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

var schemaInstance = new mongoose.Schema(productSchema);

schemaInstance.virtual('previewImg').get(function(){
	return this.pictures[0].split('.')[0] + '-min.png';
});

schemaInstance.set('toObject', { virtuals: true });
schemaInstance.set('toJSON', { virtuals: true });

module.exports = schemaInstance
module.exports.productSchema = productSchema;