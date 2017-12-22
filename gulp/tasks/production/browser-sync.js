var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../../config').browsersync.production;

/**
 * 使用BrowserSync开启服务并监听变化
 */
gulp.task('browsersync:prod', ['build:prod'], function() {
  browsersync(config);
});
