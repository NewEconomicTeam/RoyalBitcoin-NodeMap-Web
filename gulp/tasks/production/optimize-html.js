var gulp = require('gulp');
var size = require('gulp-size');
var htmlmin = require('gulp-htmlmin');
var config = require('../../config').optimize.html;

/*
  最小化HTML
*/
gulp.task('optimize:html', function() {
  return gulp.src(config.src)
    .pipe(size({title: '[optimize:html](src)'}))
    .pipe(htmlmin(config.options))
    .pipe(size({title: '[optimize:html](dst)'}))
    .pipe(gulp.dest(config.dest));
});
