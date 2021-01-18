let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: "bundle.js"
    },
    module: {
        rules: [

        ]
    },
    devServer:{
        //  children: false, // Hide children information
        //  maxModules: 0,
         contentBase: path.resolve(__dirname, 'dist'),  // 告诉服务器为该路径提供服务
         open: 'chrome',    //自动打开页面，
         hot:true,    //开启热更新，
         inline: true, // 默认为true,在打包时会注入一段代码到最后的js中，用来监视页面的改动而自动刷新页面
         port:9001,
    },
    plugins:[
        
    ]
};