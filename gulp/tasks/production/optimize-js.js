var gulp = require('gulp');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var browsersync = require('browser-sync');
var config = require('../../config').optimize.js;

/*
  拷贝并最小化JS文件
*/
gulp.task('optimize:js', function() {
  browsersync.notify('优化 JS');

  return gulp.src(config.src)
    .pipe(size({title: '[optimize:js](src)'}))
    .pipe(uglify(config.options))
    .pipe(size({title: '[optimize:js](dst)'}))
    .pipe(gulp.dest(config.dest))
    .pipe(browsersync.stream());
});
