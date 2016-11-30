var webpack = require('webpack'),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


var ROOT = path.resolve(__dirname);

var APP = __dirname + '/app';

var config = {
    context: APP,
    entry: "./index.js",
    output: {
        path: "./target/web",
        publicPath: "/",
        filename: "bundle.js"
    },
    devtool: "sourcemap",
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
                test: /\.svg(\?[a-z0-9=\.]+)?$/,
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
            { test: /.(png|woff(2)?|eot|ttf)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [new (require('ng-annotate-webpack-plugin'))({add: true}),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
        })],
    devServer: {
        // will only things in target build output directory
        // contentBase: 'target/', // run from here to avoid getting any source files served up while testing
        port: 8888
    }
};

module.exports = config;
