var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , './build'),
        //filename: '[name].js'
        filename: 'bundle.[hash].js',
    },
    module : {
        rules : [{
            test : /\.js$/, 
            include: path.resolve(__dirname , './src'),
            loader: 'babel-loader'
        },{
            test : /\.css$/, 
            include: path.resolve(__dirname , './src/css'),
            //loader:['style-loader', 'css-loader']
            loader:['css-loader']
        },{
            test: /\.html$/,
            use: [{
                    loader: 'html-loader',
                    options: {
                    minimize: true,
                    },
                },
            ],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "/public"),
        host: '127.0.0.1',
        port: 8080,
        compress:true,
        inline:true,
        open:true,
        historyApiFallback: true,
    },
    resolve :{
        alias : {
            '@':path.resolve(__dirname,'src'),
        }
    },
};