var gulp = require('gulp');
var changed = require('gulp-changed');
var browsersync = require('browser-sync');
var config = require('../../config').staticJS;

/**
 * 拷贝变化的静态文件(相关库)到构建目录下
 */
gulp.task('static-js', function() {
  browsersync.notify('拷贝静态文件');

  return gulp.src(config.src)
    .pipe(changed(config.dest))  // 忽略未变化的文件
    .pipe(gulp.dest(config.dest))
    .pipe(browsersync.stream());
});
