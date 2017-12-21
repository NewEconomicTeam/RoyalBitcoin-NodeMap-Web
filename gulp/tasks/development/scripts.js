var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var browserSync = require('browser-sync');
var bundleLogger = require('../../util/bundleLogger');
var handleErrors = require('../../util/handleErrors');
var config = require('../../config').browserify;

/**
 * 通过 Browserify 运行 JS
 */
gulp.task('scripts', function(callback) {
  browserSync.notify('正在编译 JavaScript');

  var bundleQueue = config.bundleConfigs.length;
  var browserifyThis = function(bundleConfig) {
    var bundler = browserify({
      // 必须的 watchify 参数
      cache: {},
      packageCache: {},
      fullPaths: false,
      // 指定应用入口点
      entries: bundleConfig.entries,
      // 按需添加附加文件扩展名
      extensions: config.extensions,
      // 开启 source maps!
      debug: config.debug
    });

    var bundle = function() {
      // 打包开始时记录日志
      bundleLogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        // 报告编译错误
        .on('error', handleErrors)
        // 使用vinyl-source-stream将输出stream与glup兼容，
        // 指定目标输出文件名
        .pipe(source(bundleConfig.outputName))
        // 指定输出文件位置
        .pipe(gulp.dest(bundleConfig.dest))
        .pipe(browserSync.stream())
        .on('finish', reportFinished);
    };

    if (global.isWatching) {
      // 用 watchify 封装 bundler ，并在文件变化后 rebundle
      bundler = watchify(bundler);
      // 文件更新后重构
      bundler.on('update', bundle);
    }

    var reportFinished = function() {
      // 打包完毕后记录日志
      bundleLogger.end(bundleConfig.outputName);

      if (bundleQueue) {
        bundleQueue--;
        if (bundleQueue === 0) {
          // 如果队列为空，调用回调，通知 gulp 任务已完成
          callback();
        }
      }
    };

    return bundle();
  };

  // 开始为每个指定的 bundleConfig 进行 Browserify 打包
  config.bundleConfigs.forEach(browserifyThis);
});
