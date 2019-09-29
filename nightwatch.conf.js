const chromedriver = require('chromedriver');

module.exports = {
  // 测试文件入口
  src_folders: ['test'],
  // 输出日志路径
  output_folder: 'reports',

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: 'node_modules/.bin/geckodriver',
    cli_args: [
      // Can be used for a faster startup of Firefox, which needs to be started using: firefox -marionette
      // '--connect-existing',
      // '--marionette-port=2828'
    ]
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false
        }
      },

      webdriver: {
        port: 9515,
        server_path: chromedriver.path
      }
    },

    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        port: 4445,
        server_path: '/usr/bin/safaridriver'
      }
    }
  }
};