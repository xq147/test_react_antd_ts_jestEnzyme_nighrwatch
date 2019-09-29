// css分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const theme = require('./../../theme');
const { resolve } = require('./../utils');

module.exports = [
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
      'postcss-loader'
    ]
  }, {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: resolve('.cache-loader')
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          modifyVars: theme,
        }
      }
    ]
  }
];
