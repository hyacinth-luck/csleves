/* eslint-disable no-console */
const webpack = require("webpack");
const path = require('path')
const https = require('https')
const fs = require('fs')
console.log('__dirname:',__dirname)

module.exports = {
    devServer:{
      disableHostCheck:true,
      https: {
        key: fs.readFileSync(path.join(__dirname, './cert/privatekey.pem')),
        cert: fs.readFileSync(path.join(__dirname, './cert/certificate.pem'))
      }
    },
    configureWebpack: {
    //支持jquery
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    css: {
        loaderOptions: {
             postcss: {
               plugins: [
                 require("postcss-pxtorem")({
                       rootValue: 75, 
                       selectorBlackList: [".van"],
                       propList: ["*"],
                       minPixelValue: 2 
                   })
               ]
             }
        }
   },
   chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  }
}
function addStyleResource (rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // 需要全局导入的less
        path.resolve(__dirname, './src/assets/css/cssReset.less')
      ]
    })
}