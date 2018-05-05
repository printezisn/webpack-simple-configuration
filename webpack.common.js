const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    cache: true,
    entry: {
        app: path.resolve(__dirname, 'app/app.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name]-[chunkhash].min.js'
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
                test: /\.(scss|sass)$/,
                use: [
                	MiniCssExtractPlugin.loader,
                	'css-loader',
                	'sass-loader'
                ]
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
    	new CleanWebpackPlugin(['dist']),
    	new MiniCssExtractPlugin({
    		filename: '[name]-[chunkhash].min.css'
    	}),
        new HtmlWebpackPlugin({
            inject: false,
            template: 'index-template.html',
            filename: '../index.html'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
    	splitChunks: {
    		cacheGroups: {
    			commons: {
    				test: /[\\/]node_modules[\\/]/,
    				name: 'vendor',
    				chunks: 'all'
    			}
    		}
    	},
    	runtimeChunk: {
    		name: 'runtime.min.js'
    	}
    }
};