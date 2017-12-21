var notify = require('gulp-notify');

module.exports = function() {
  var args = Array.prototype.slice.call(arguments);

  // 通过 gulp-notify 发送 error 到通知中心
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);

  // 在该 task 中保持 gulp 挂起
  this.emit('end');
};
