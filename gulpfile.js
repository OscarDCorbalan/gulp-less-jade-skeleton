'use strict';

const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const jade = require('gulp-jade');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');

const PUB_DIR = {
	root: path.join(__dirname, 'public')
};
PUB_DIR.css = path.join(PUB_DIR.root, 'css');
PUB_DIR.img = path.join(PUB_DIR.root, 'images');

const SRC_DIR = {
	root: path.join(__dirname, 'src')
};
const SRC_FILES = {
	img: path.join(SRC_DIR.root, 'images', '*'),
	less: path.join(SRC_DIR.root, 'less', '*.less'),
	jade: path.join(SRC_DIR.root, '*.jade')
};

/* TASKS */

gulp.task('watch', () => {
	gulp.watch(SRC_FILES.less, ['less', 'cssmin']);
	gulp.watch(SRC_FILES.jade, ['jade']);
	gulp.watch(SRC_FILES.img, ['imagemin']);
});

gulp.task('less', () =>
	gulp.src(SRC_FILES.less)
		.pipe(less().on('error', err => console.log(err)))
		.pipe(gulp.dest(PUB_DIR.css))
		.pipe(connect.reload())
);

gulp.task('cssmin', () =>
    gulp.src(path.join(PUB_DIR.css, 'style.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(PUB_DIR.css))
		.pipe(connect.reload())
);

gulp.task('jade', () =>
	gulp.src(SRC_FILES.jade)
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(PUB_DIR.root))
		.pipe(connect.reload())
);

gulp.task('imagemin', () =>
    gulp.src(SRC_FILES.img)
        .pipe(imagemin())
        .pipe(gulp.dest(PUB_DIR.img))
		.pipe(connect.reload())
);

gulp.task('webserver', function() {
	connect.server({
    	root: 'public',
		livereload: true,
		port: 80,
		host: 'gulp.dev'
	});
});

gulp.task('default', ['less', 'cssmin', 'jade', 'imagemin', 'webserver', 'watch']);
