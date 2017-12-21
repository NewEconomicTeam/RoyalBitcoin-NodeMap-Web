var gulp = require('gulp');
var config = require('../../config').watch;

/**
 * 开启 browsersync 任务，监听文件变化
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.html, ['html']);
  gulp.watch(config.styles, ['styles', 'lint-styles']);
  gulp.watch(config.scripts, ['scripts', 'jshint']);
  gulp.watch(config.images, ['images']);
  // gulp.watch(config.sprites, ['sprites']);
});
