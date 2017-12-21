var gulp           = require('gulp');
var postcss        = require('gulp-postcss');
var plumber        = require('gulp-plumber');
var sourcemaps     = require('gulp-sourcemaps');
var size           = require('gulp-size');
var gutil          = require('gulp-util');
var browsersync    = require('browser-sync');
var cssnano        = require('cssnano');
var autoprefixer   = require('autoprefixer');
var cssvariables   = require('postcss-css-variables');
var mqpacker       = require('css-mqpacker');
var config         = require('../../config').styles;

function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

/**
 * 通过 PostCSS 和它的插件运行 CSS
 * 构建 sourcemaps 并进行压缩
 */
var processors = [
  autoprefixer(config.options.autoprefixer),
  cssvariables(),
  mqpacker(config.options.mqpacker),
  cssnano(config.options.cssnano)
];

gulp.task('styles', function() {
  browsersync.notify('使用 PostCSS 转换 CSS');

  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(size({title: '[optimize:css](src)'}))
    .pipe(postcss(processors))
    .pipe(size({title: '[optimize:css](dst)'}))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
});
