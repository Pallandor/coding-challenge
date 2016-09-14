'use strict';

const webpack = require('webpack');
const path = require('path');
const webpackUtil = require('./webpack/util');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
    ],
  },
  externals: webpackUtil.createExternalsCompliantNodeModules(),
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false }),
  ],
  devtool: 'sourcemap',
};
