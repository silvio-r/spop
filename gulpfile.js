'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var pac = require('./package.json');

// SPOP
	gulp.task('default',  function () {
		console.log('Be specific !');
	});

	gulp.task('clean', function () {
		return gulp.src([
				'./dist/spop.min.js',
				'./dist/spop.css',
				'./dist/spop.min.css'
				], { read: false })
			.pipe($.clean());
	});

	gulp.task('styles', function () {
		gulp.src('./dist/spop.scss')
			.pipe($.sass().on('error', $.sass.logError))
			.pipe($.autoprefixer('> 1%', 'ie 8'))
			.pipe(gulp.dest('./dist/'))
			.pipe($.rename({suffix: '.min'}))
			.pipe($.cssmin())
			.pipe(gulp.dest('./dist/'))
			.pipe($.livereload());
	});

	gulp.task('scripts', function() {
		return gulp.src('./dist/spop.js')
			.pipe($.uglify({preserveComments:'some'}))
			.pipe($.rename({suffix: '.min'}))
			.pipe(gulp.dest('./dist/'))
			.pipe($.livereload());
	});

	gulp.task('watch', [ 'clean', 'styles', 'scripts'], function () {
		$.livereload.listen();

		gulp.watch([
			'./dist/spop.min.js',
			'./dist/spop.min.css'
		]).on('change', $.livereload.changed);

		gulp.watch('./dist/spop.js', ['scripts']);
		gulp.watch('./dist/spop.scss', ['styles']);
	});



// DOCS
	gulp.task('cleanDocs', function () {
		return gulp.src([
				'./src/styles.min.css',
				'./src/scripts.min.js',
				'./index.html'
			], { read: false })
			.pipe($.clean());
	});

	gulp.task('stylesDocs', function () {
		gulp.src('./src/styles.scss')
			.pipe($.sass({sourceComments:true }).on('error', $.sass.logError))
			.pipe($.autoprefixer('> 1%', 'ie 9'))
			.pipe($.cssmin())
			.pipe($.rename({suffix: '.min'}))
			.pipe(gulp.dest('./src/'))
			.pipe($.livereload());
	});

	gulp.task('scriptsDocs', function() {
		return gulp.src('./src/scripts.js')
			.pipe($.uglify())
			.pipe($.rename({suffix: '.min'}))
			.pipe(gulp.dest('./src/'))
			.pipe($.livereload());
	});

	gulp.task('html', function () {
		var LOCALS = {
			title: pac.name,
			description: pac.description,
			version: pac.version
		};

		gulp.src('./src/index.jade')
			.pipe($.jade({
				pretty: true,
				locals: LOCALS
			}))
			.pipe(gulp.dest('./'))
			.pipe($.livereload());
	});


	gulp.task('watchDocs', [ 'cleanDocs', 'stylesDocs', 'scriptsDocs', 'html'], function () {
		$.livereload.listen();

		gulp.watch([
			'./*.html',
			'./src/scripts.min.js',
			'./src/styles.min.css'
		]).on('change', $.livereload.changed);

		gulp.watch(['./src/index.jade', './package.json'], ['html']);
		gulp.watch('./src/scripts.js', ['scriptsDocs']);
		gulp.watch('./src/*.scss', ['stylesDocs']);
	});


// ALL
	gulp.task('watchAll', ['watch', 'watchDocs']);

