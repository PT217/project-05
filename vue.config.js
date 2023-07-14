/*
 * @Author: your name
 * @Date: 2022-04-26 10:17:43
 * @LastEditTime: 2023-06-07 18:17:56
 * @LastEditors: lichen 915099259@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const path = require("path")
const resolve = dir => path.join(__dirname, dir)
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  assetsDir : 'static',
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias.set("@", resolve("src"))
  },
  devServer: {
    proxy: {
      '/stream': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite:{'^/stream':''},//路径改写
      },
    }
  }
  // devServer: {
  //   open: true,
  //   host: 'localhost',
  //   port: 4000,
  // }
})



