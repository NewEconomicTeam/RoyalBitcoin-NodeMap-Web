var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');

var config = require('../../config').html;

gulp.task('html', function(){
  browserSync.notify('正在编译 html');

  return gulp.src(config.development.src)
    .pipe(changed(config.development.dest))  // 忽略未变化的文件
    .pipe(gulp.dest(config.development.dest))
    .pipe(browserSync.stream());
});
