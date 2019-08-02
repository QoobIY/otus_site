const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'bundle.min': "./src/index.js",
        'course2': './src/course2.js'
    },
    output: {
        path: path.join(__dirname, "output"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {presets: ['babel-preset-env']}
            }
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },
    devtool: 'inline-source-map',
    devServer: {
        port: '3001',
        host: '192.168.3.156',
        proxy: {
            '/api': 'http://localhost:9000/',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'login.html'
        }),
        new ExtractTextPlugin('style.css')
    ]
};