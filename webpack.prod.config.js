const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let config = require('./webpack.config.js');

config.watch = false;
config.plugins.push(new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.min.css$/
}));
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    extractComments: true
}));


module.exports = config;