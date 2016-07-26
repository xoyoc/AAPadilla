var gulp=require('gulp');
var sass=require('gulp-sass');
var rename=require('gulp-rename');
var babel=require('babelify');
var browserify=require('browserify');
var source=require('vinyl-source-stream');
var watchify=require('watchify');

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

function compile(watch) {
	var bundle=browserify('./src/index.js');
	if (watch){
		bundle = watchify(bundle);
		bundle.on('update',function(){
			console.log('----> Bundling....');
			rebundle();
		})
	}
	
	function rebundle(){
		bundle
			.transform(babel)
			.bundle()
			.pipe(source('index.js'))
			.pipe(rename('app.js'))
			.pipe(gulp.dest('public'));
		gulp.watch('index.scss',['styles']);
	}
	rebundle();
}
gulp.task('Web', function(){
		gulp
		.src('public/*')
		.pipe(gulp.dest('www/html'));
	})
gulp.task('Web2', function(){
		gulp
		.src('*.html')
		.pipe(gulp.dest('www/html'));
	})


gulp.task('build', function(){ return compile(); });

gulp.task('watch', function(){ return compile(true); });

gulp.task('default', ['styles','assest','build','Web','Web2']);