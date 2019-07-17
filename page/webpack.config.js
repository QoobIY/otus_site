const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.min.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env']
                }
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname,
        port: '3001',
        host: '192.168.2.20',
        proxy: {
            '/zen': 'http://localhost:8080'
        }
    }
};
console.log('abi test webpack');