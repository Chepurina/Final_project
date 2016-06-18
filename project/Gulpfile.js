var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');

// Конкатенация и минификация файлов
gulp.task('script', function(){
    gulp.src(['js/*.js'])
        .pipe(concat('main.min.js'))
	//	.pipe(uglify())
        .pipe(gulp.dest('../Release/js'))
});	
	
gulp.task('images', function(){
    gulp.src(['img/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('../Release/img'))
});

gulp.task('styles', function(){
    gulp.src(['css/*.css'])
		.pipe(concatCss("main.min.css"))
		.pipe(cssmin())
		.pipe(gulp.dest('../Release/css'))
});	

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


// Действия по умолчанию
gulp.task('default', function(){
  gulp.run('script', 'images','styles','sass');
 
 
  // Отслеживаем изменения в файлах
  gulp.watch("js/src/*.js", function(event){
    gulp.run('script');
  });
  
  gulp.watch("img/src/*", function(event){
    gulp.run('images');
  });
  
  gulp.watch("css/src/*.css", function(event){
    gulp.run('styles');
  });
  
   gulp.watch("./sass/**/*.scss", function(event){
    gulp.run('sass');
  });
  
});

