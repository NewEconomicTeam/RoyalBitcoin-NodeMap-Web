var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../../config').browsersync.development;

/**
 * 运行 build 任务，开启一个 BrowserSync 服务器
 */
gulp.task('browsersync', ['build'], function() {
  browsersync(config);
});
