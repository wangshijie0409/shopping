/**
 * Created by z on 2017/8/7.
 */
let path=require("path");
let htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:"./app/index.js",
    output: {
        filename: "bundle.js",
        path:path.resolve('dist'),
    },
    module: {
        rules:[
            {test:/\.jsx?$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.(gif|png|jpg|svg|ttf|woff|woff2|eot)$/,use:'url-loader'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    devtool:'source-map',//错误源码映射
    devServer: {//解决跨域配个代理
        proxy:{//代理
            '/api':'http://localhost:3000'
        }
    }
};
