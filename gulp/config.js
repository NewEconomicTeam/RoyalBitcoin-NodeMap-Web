var build = 'build';
var node_modules = 'node_modules';

var src = 'source';
var srcAssets = 'source';

var development = '../server/server/pages/templates/pages';
var developmentAssets = '../server/server/pages/static/pages';

var production = development;
var productionAssets = developmentAssets;

module.exports = {
  browsersync: {
    development: {
      proxy: 'localhost:8081',
      port: 9999,
      browser: ["google chrome"],
      files: []
    },
    production: {
      proxy: 'nodemap.rbtc.world',
      port: 9998,
      browser: ["google chrome"]
    }
  },
  delete: {
    development: {
      src: [development, developmentAssets],
      options: {
        force: true,
      }
    },
    production: {
      src: [
        developmentAssets + '/css/app.css.map',

        developmentAssets + '/css/bootstrap.css',
        developmentAssets + '/css/bootstrap-theme.css',

        developmentAssets + '/js/bootstrap.js',
        developmentAssets + '/js/echarts.js',
        developmentAssets + '/js/jquery.js',
        developmentAssets + '/js/vue.js',
      ],
      options: {
        force: true,
      }
    }
  },
  html: {
    development: {
      src: srcAssets + '/html/**/*.{html,htm}',
      dest: development
    },
    production: {
      src: srcAssets + '/html/**/*.{html,htm}',
      dest: production,
      renameOptions: {},
      replace: {
        // // bootstrap
        '/static/pages/css/bootstrap.css':
          '//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css',
        '/static/pages/css/bootstrap-theme.css':
          '//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
        '/static/pages/js/bootstrap.js':
          '//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js',

        // echarts
        '/static/pages/js/echarts.js':
          '//cdn.bootcss.com/echarts/3.8.5/echarts.min.js',

        // vue
        '/static/pages/js/vue.js':
          '//cdn.bootcss.com/vue/2.5.13/vue.min.js',

        // Others
        '/static/pages/js/jquery.js':
          '//cdn.bootcss.com/jquery/3.2.1/jquery.min.js',
      }
    }
  },
  styles: {
    src: srcAssets + '/styles/*.css',
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
  browserify: {
    // 开启 source maps
    debug: true,
    // 可选的附加文件扩展名
    extensions: ['.coffee', '.hbs'],
    // bundle输出的配置文件
    bundleConfigs: [{
      dest: developmentAssets + '/js',
      entries: './' + srcAssets + '/js/app.js',
      outputName: 'app.js'
    }]
  },
  jshint: {
    src: srcAssets + '/js/**/*.js'
  },
  staticJS: {
    src: [
      srcAssets + '/static/js/*.js',
    ],
    dest: developmentAssets + '/js'
  },
  images: {
    src: srcAssets + '/static/images/**/*',
    dest: developmentAssets + '/img'
  },
  nodeModules: {
    development: {
      css: {
        src: [
          node_modules + '/bootstrap/dist/css/bootstrap.css',
          node_modules + '/bootstrap/dist/css/bootstrap-theme.css',
        ],
        dest: developmentAssets + '/css',
      },
      js: {
        src: [
          node_modules + '/echarts/dist/echarts.js',
          node_modules + '/jquery/dist/jquery.js',
          node_modules + '/bootstrap/dist/js/bootstrap.js',
          node_modules + '/vue/dist/vue.js',
        ],
        dest: developmentAssets + '/js',
      },
    }
  },
  optimize: {
    html: {
      src: production + '/**/*.{html,htm,php}',
      dest: production,
      options: {
        collapseWhitespace: true
      }
    },
    css: {
      src: productionAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {},
      replace: {}
    },
    js: {
      src: productionAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src: productionAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    },
  },
}
