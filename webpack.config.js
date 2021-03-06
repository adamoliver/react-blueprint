const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    devtool: 'source-map',
    entry: [
        './app/index.jsx',
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ],
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
        }),
    ],
};

module.exports = config;
