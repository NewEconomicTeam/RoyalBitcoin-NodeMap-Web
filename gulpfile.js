var requireDir = require('require-dir');

// 加载 gulp/tasks 下的全部任务，包括子路径
requireDir('./gulp/tasks', {
  recurse: true
});
