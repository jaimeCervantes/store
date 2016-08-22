var webpack = require('webpack');
module.exports = {
	entry: {
		store: './src/js/store.js',
		adminStore: './src/js/admin/adminStore.js'
	},
	output: {
		path: './bin',
		filename: '[name].bundle.js'
	},
	//to uglify final code
	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin({ compress: false, beautify: true, sourceMap: true })
	// ]
};