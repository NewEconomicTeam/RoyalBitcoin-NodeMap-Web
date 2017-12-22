var gulp        = require('gulp');
var postcss     = require('gulp-postcss');
var plumber     = require('gulp-plumber');
var size        = require('gulp-size');
var gutil       = require('gulp-util');
var browsersync = require('browser-sync');
var cssnano     = require('cssnano');
var config      = require('../../config').optimize.css;


function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

/**
 * 最小化CSS文件
 */
var processors = [
  cssnano(config.options),
];

gulp.task('optimize:css', function() {
  browsersync.notify('优化 CSS');

  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(size({title: '[optimize:css](src)'}))
    .pipe(postcss(processors))
    .pipe(size({title: '[optimize:css](dst)'}))
    .pipe(gulp.dest(config.dest))
    .pipe(browsersync.stream());
});
