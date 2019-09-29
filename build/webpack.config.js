const plugins = require('./plugin');
const jsRules = require('./rules/jsRules');
const styleRules = require('./rules/styleRules');
const fileRules = require('./rules/fileRules');
const optimization = require('./optimization');
// 映射 tsconfig 路径
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { resolve } = require('./utils');

let config = {
  entry: {
    app: resolve('src/modules/app.tsx'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolve('tsconfig.json')
      })
    ]
  },
  output: {
    path: resolve('dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [...styleRules, ...fileRules, ...jsRules],
  },
  plugins: [...plugins],
  optimization,
  devServer: {
    port: 8082,
    proxy: {
      '/': {
        target: 'http://localhost:8000/',
        secure: false
      }
    },
  },
  // 生成source map，方便调试
  devtool: 'cheap-eval-source-map'
};
module.exports = config;
