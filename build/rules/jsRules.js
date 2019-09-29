const { resolve } = require('./../utils');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = [
  {
    test: /\.ts(x?)$/,
    use: {
      loader: 'awesome-typescript-loader',
      options: {
        transpileOnly: true,
        useCache: true,
        cacheDirectory: resolve('.cache-loader'),
        babelOptions: {
          babelrc: false,
          plugins: [
            'react-hot-loader/babel'
          ]
        },
        getCustomTransformers: () => ({
          before: [
            tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'lib',
              // true => less
              // css => css 不能定制主题
              style: true
            })
          ]
        })
      }
    },
    exclude: /node_modules/
  }
];
