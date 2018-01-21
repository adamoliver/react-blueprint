const webpack = require('webpack');

const config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './app/index.jsx',
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                'react-hot-loader',
                'babel-loader',
            ],
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
};

module.exports = config;
