var build = 'build';
var node_modules = 'node_modules';

var src = 'source';
var srcAssets = 'source';

var development = 'build/development';
var developmentAssets = 'build/development/static/frontend';

var production = 'build/production';
var productionAssets = 'build/production/static/frontend';

var deployment = 'build/deployment';
var deploymentAssets = 'build/deployment/static/frontend';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [
          development,
          node_modules,
          development + '/html']
      },
      port: 9999,
      browser: ["google chrome"],
      files: [
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998,
      browser: ["google chrome"]
    }
  },
  delete: {
    src: [development, production]
  },
  html: {
    development: {
      src: srcAssets + '/**/*.{html,htm}',
      dest: development
    },
    production: {
      src: srcAssets + '/**/*.{html,htm}',
      dest: production,
      renameOptions: {},
      replace: {
        // // bootstrap
        '<link rel="stylesheet" href="bootstrap/dist/css/bootstrap.css">': '<link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">',
        '<link rel="stylesheet" href="bootstrap/dist/css/bootstrap-theme.css">': '<link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" rel="stylesheet">',
        '<script src="bootstrap/dist/js/bootstrap.js"></script>': '<script src="//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>',

        // // animate
        // '<link rel="stylesheet" href="animate.css/animate.css">': '<link href="//cdn.bootcss.com/animate.css/3.5.2/animate.min.css" rel="stylesheet">',

        // // aos
        // '<link rel="stylesheet" href="aos/dist/aos.css">': '<link href="//cdn.bootcss.com/aos/2.2.0/aos.css" rel="stylesheet">',
        // '<script src="aos/dist/aos.js"></script>': '<script src="//cdn.bootcss.com/aos/2.2.0/aos.js"></script>',

        // // Others
        // '<script src="jquery/dist/jquery.js"></script>': '<script src="//cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>',
        // '<script src="skrollr/dist/skrollr.min.js"></script>': '<script src="//cdn.bootcss.com/skrollr/0.6.30/skrollr.min.js"></script>',
        // '<script src="vue/dist/vue.js"></script>': '<script src="//cdn.bootcss.com/vue/2.4.2/vue.min.js"></script>',

        // 'images/home/': '<?php echo get_template_directory_uri(); ?>/pages/gyl/images/home/'
      }
    }
  },
  styles: {
    src: srcAssets + '/styles/**/*.css',
    dest: developmentAssets + '/css',
    options: {
      autoprefixer: {
        browsers: [
          'last 2 versions',
          'safari 5',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4',
        ],
        cascade: true
      },
      mqpacker: {},
      cssnano: {}
    }
  },
  watch: {
    html: [
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}'
    ],
    styles: srcAssets + '/styles/**/*.css',
    scripts: srcAssets + '/js/**/*.js',
    images: srcAssets + '/images/**/*',
    sprites: srcAssets + '/images/**/*.png'
  },
  lintStyles: {
    src: [
      srcAssets + '/styles/**/*.css',
      '!' + srcAssets + '/styles/partials/_sprites.css'
    ],
    options: {
      stylelint: {
        'rules': {
          'string-quotes': 'double',
          'color-hex-case': 'lower',
          'color-no-invalid-hex': true,
          'comment-empty-line-before': [ 'always', {
            'ignore': ['stylelint-commands', 'after-comment']
          } ],
          'declaration-colon-space-after': 'always',
          'max-empty-lines': 2,
          'rule-empty-line-before': [ 'always', {
            'except': ['first-nested'],
            'ignore': ['after-comment']
          } ],
          'value-no-vendor-prefix': true,
        }
      },
      reporter: {
        clearMessages: true
      }
    }
  },
}
