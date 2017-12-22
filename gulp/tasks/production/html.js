var gulp = require('gulp');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var config = require('../../config').html.production;

gulp.task('html:prod', function() {
  var stream = gulp.src(config.src);
  dict = config.replace;
  for (var key in dict) {
    stream = stream.pipe(replace(key, dict[key]));
  }
  stream = stream.pipe(rename(config.renameOptions));
  return stream.pipe(gulp.dest(config.dest));
});
