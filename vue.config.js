/* eslint-disable no-console */
const path = require('path')

module.exports = {
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
console.log('__dirname:',__dirname)
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