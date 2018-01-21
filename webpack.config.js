const path = require('path');

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
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
};

module.exports = config;
