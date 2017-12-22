var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var config = require('../../config').nodeModules.development;

/*
  拷贝Web中引用到的Node包到构建目录下
*/
gulp.task('node-modules', function() {
  browserSync.notify('处理node包资源');

  // 拷贝引用到的CSS文件
  gulp.src(config.css.src)
    .pipe(changed(config.css.dest))
    .pipe(gulp.dest(config.css.dest))

  // 拷贝引用到的JS文件
  return gulp.src(config.js.src)
    .pipe(changed(config.js.dest))  // 忽略未变化的文件
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.stream());
});
