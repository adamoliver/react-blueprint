const webpack = require('webpack');
const config = require('./webpack.config');

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
