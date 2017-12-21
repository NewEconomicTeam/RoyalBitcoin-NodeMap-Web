var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var config = require('../../config').nodeModules.development;

/*
  拷贝变化的图片到构建目录下
*/
gulp.task('node-modules', function() {
  browserSync.notify('处理node包资源');

  return gulp.src(config.src)
    .pipe(changed(config.dest))  // 忽略未变化的文件
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});
