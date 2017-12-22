var gulp = require('gulp');
var size = require('gulp-size');
var imagemin = require('gulp-imagemin');
var browsersync = require('browser-sync');
var config = require('../../config').optimize.images;

/*
  拷贝并最小化图片文件
*/
gulp.task('optimize:images', function() {
  browsersync.notify('优化 Images');

  return gulp.src(config.src)
    .pipe(size({title: '[optimize:images](src)'}))
    .pipe(imagemin(config.options))
    .pipe(size({title: '[optimize:images](dst)'}))
    .pipe(gulp.dest(config.dest))
    .pipe(browsersync.stream());
});
