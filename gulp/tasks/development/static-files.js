var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var config = require('../../config').staticFiles;

/*
  拷贝变化的图片到构建目录下
*/
gulp.task('static-files', function() {
  browserSync.notify('拷贝静态文件');

  return gulp.src(config.src)
    .pipe(changed(config.dest))  // 忽略未变化的文件
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});
