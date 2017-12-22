var gulp = require('gulp');
var del = require('del');
var config = require('../../config').delete.production;

/**
 * 删除文件夹&文件
 */
gulp.task('delete:prod', function() {
  return del(config.src, config.options);
});
