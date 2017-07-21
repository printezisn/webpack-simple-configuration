const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const webpack = require('webpack');

module.exports = {
    watch: true,
    cache: true,
    entry: {
        app: path.resolve(__dirname, 'app/app.ts'),
        vendor: path.resolve(__dirname, 'app/vendor.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].min.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: 'es2015' }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: 'es2015' }
                },
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: { name: 'img/[name].[ext]' }
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: { name: 'fonts/[name].[ext]' }
                }
            }
        ]
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin({
            filename: '[name].min.css',
            allChunks: true
        })
    ]
};