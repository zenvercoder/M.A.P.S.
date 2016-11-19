var webpack = require('webpack'),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin');


var ROOT = path.resolve(__dirname);

var APP = __dirname + '/app';

var config = {
    context: APP,
    entry: "./index.js",
    output: {
        path: "./target",
        publicPath: "/",
        filename: "bundle.js"
    },
    resolve: {
        modulesDirectories: ['./node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "svg-url-loader?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000&mimetype=image/png"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /index\.html/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
    },
    devServer: {
        // will only things in target build output directory
        contentBase: 'target/' // run from here to avoid getting any source files served up while testing
    }
};

module.exports = config;
