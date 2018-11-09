/* Parameters */
var path = {
	___dn___: "http://www.domain-name.com", // Domain Name
	___root___: "/www", // Root path (ex: "/www")
	___public___: "/test" // Public path (ex: "/emails/2018-05-19/")
}
var server = {
	host: '', // Host Name
	port: '', // Port
    user: '', // Login
    pass: '', // Password
    remotePath: path.___root___ + path.___public___ // Folder path
}
var filename = 'newsletter'; // Name of your MJML file (./src/filename.mjml)

/* Packages */
var gulp = require('gulp');
var mjml = require('gulp-mjml');
var replace = require('gulp-replace');
var image = require('gulp-image');
var util = require('gulp-util');
var clean = require('gulp-clean');
var ftp = require('gulp-ftp');
var open = require('gulp-open');

/* Tasks */
gulp.task('clean', function(){

	return gulp.src('dist', {
			read: false
		})
		.pipe(util.env.mode === 'prod' ? clean() : util.noop() )
	;

});
gulp.task('image', ['clean'], function(){

	return gulp.src('./src/images/**/*')
    	.pipe(image())
    	.pipe(gulp.dest('./dist/images'))
    ;

});
gulp.task('html', ['image'], function(){

	return gulp.src('./src/' + filename + '.mjml')
		.pipe(util.env.mode === 'prod' ? replace('src="./images', 'src="' + path.___dn___ + path.___public___ + '/images') : util.noop() )
		.pipe(mjml())
		.pipe(gulp.dest('./dist'))
    ;

});
gulp.task('watch', ['html'], function(){

	gulp.watch('./src/*.mjml', ['html']);

});
gulp.task('upload', ['html'], function(){

	return gulp.src('./dist/**/*')
		.pipe(ftp(server))
  		.pipe(util.noop())
	;

});
gulp.task('ftp', ['upload'], function(){

	return gulp.src('./gulpfile.js')
  		.pipe(open({ 
  			uri: path.___dn___ + path.___public___ + '/' + filename + '.html'
  		}))
	;

});
gulp.task('default', ['html']);