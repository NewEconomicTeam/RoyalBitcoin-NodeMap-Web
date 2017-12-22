var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * 按定义顺序执行全部构建任务
 */
gulp.task('build:prod', ['build'], function(callback) {
  runSequence(
    'delete:prod',
    [
      'html:prod',
      'optimize:html',
      'optimize:css',
      'optimize:js',
      'optimize:images'
    ],
    // 'revision',
    // 'rev:collect',
    callback);
});
