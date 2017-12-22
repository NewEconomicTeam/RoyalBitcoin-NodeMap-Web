var gulp = require('gulp');
var size = require('gulp-size');
var htmlmin = require('gulp-htmlmin');
var browsersync = require('browser-sync');
var config = require('../../config').optimize.html;

/*
  最小化HTML
*/
gulp.task('optimize:html', function() {
  browsersync.notify('优化 HTML');

  return gulp.src(config.src)
    .pipe(size({title: '[optimize:html](src)'}))
    .pipe(htmlmin(config.options))
    .pipe(size({title: '[optimize:html](dst)'}))
    .pipe(gulp.dest(config.dest))
    .pipe(browsersync.stream());
});
