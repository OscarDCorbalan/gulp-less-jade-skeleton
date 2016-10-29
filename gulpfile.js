'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const jade = require('gulp-jade');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const connect = require('gulp-connect');


// Source folder configuration
const SRC_DIR = {};
SRC_DIR.root = './src/';
SRC_DIR.assets = SRC_DIR.root + 'assets/';
SRC_DIR.img = SRC_DIR.assets + 'images/';

// Source file matchers, using respective directories
const SRC_FILES = {
	assets: SRC_DIR.assets + '**/*'
};

// Output directories
const PUB_DIR = {};
PUB_DIR.root = './public/';
PUB_DIR.css = PUB_DIR.root + 'css/';
PUB_DIR.cssFiles = PUB_DIR.root + 'css/style.css';
PUB_DIR.fnt = PUB_DIR.root + 'fonts/';
PUB_DIR.img = PUB_DIR.root + 'images/';


// TASKS

gulp.task('watch', () => {
	gulp.watch(SRC_FILES.assets, ['copyAssets']);
});

gulp.task('copyAssets', () =>
    gulp.src(SRC_FILES.assets)
        .pipe(gulp.dest(PUB_DIR.root))
		.pipe(connect.reload())
);

gulp.task('webserver', () =>
	connect.server({
    	root: 'public',
		livereload: true,
		port: 80,
		host: 'localhost'
	})
);

gulp.task('default', ['copyAssets']);
gulp.task('server', ['default', 'webserver', 'watch']);
