var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * 根据定义顺序执行全部构建任务
 */
gulp.task('build', function(callback) {
  runSequence(
    'delete',
    [
      'html',
      'styles',
      'scripts',
      'static-files',
      'images'
    ],
    // 'base64',
    callback);
});
