const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
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
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 设置二级
          '^/r': '/'
        }
        // headers:{//重点在这里，添加配置项 headers 就可以了
        //   'Referer':'https://www.manhuafen.com'
        // },
      }
    }
  }
}
