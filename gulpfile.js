var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('assest', function(){
		gulp
		.src('assest/*')
		.pipe(gulp.dest('public'));
	})

gulp.task('styles', function(){
		gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
	})

gulp.task('default',['assest','styles']);