const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin' : '/'

const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ]
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        https: true,
        target: 'https://www.manhuafen.com/comic',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 设置二级
          '^/api': '/'
        }
        // headers:{//重点在这里，添加配置项 headers 就可以了
        //   'Referer':'https://www.manhuafen.com'
        // },
      },
      '/r': {
        https: true,
        target: 'https://www.manhuafen.com',
        changeOrigin: true,
        pathRewrite: {
          '^/r': '/'
        }
      }
    }
  }
}
