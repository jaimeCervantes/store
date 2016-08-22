var gulp = require('gulp');
var gConcat = require('gulp-concat');
var gUglify = require('gulp-uglify');
var gMinifyHtml = require('gulp-minify-html');
var gNgHtml2js = require('gulp-ng-html2js');
var webpack = require('webpack');
var gUtil = require("gulp-util");

gulp.task('store-templates', function(){
	return gulp.src('./src/templates/all/**/*.html')
					.pipe(gMinifyHtml({
						empty:true,
						spare:true,
						quotes: true
					}))
					.pipe(gNgHtml2js({
						moduleName: 'StoreTemplates',
						prefix: '/templates/all/'
					}))
					.pipe(gConcat('storeTemplates.js'))
					// .pipe(gUglify())
					.pipe(gulp.dest('./src/js/'));
});


gulp.task('admin-store-templates', function(){
	return gulp.src('./src/templates/admin/**/*.html')
					.pipe(gMinifyHtml({
						empty:true,
						spare:true,
						quotes: true
					}))
					.pipe(gNgHtml2js({
						moduleName: 'AdminStoreTemplates',
						prefix: '/templates/admin/'
					}))
					.pipe(gConcat('adminStoreTemplates.js'))
					// .pipe(gUglify())
					.pipe(gulp.dest('./src/js/admin/'));
});


gulp.task('store', ['store-templates', 'admin-store-templates'], function(callback){
	webpack(require('./webpack.config.js'), function(err, stats){
		if(err){
			throw new gUtil.PluginError("webpack", err);
		}

		gUtil.log("[webpack]", stats.toString({ color: 'green'}));
		callback();
	});
});


gulp.task('javascript', ['store'], function(){

	gulp.watch(['./src/js/**/*.js', './src/templates/**/*.html'], ['store']);

});