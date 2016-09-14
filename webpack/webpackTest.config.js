'use strict';

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const webpackUtil = require('./util');

module.exports = {
  entry: path.join(__dirname, '..', 'test/server/index.js'),
  target: 'node',
  output: {
    path: path.join(__dirname, 'build-test'),
    filename: 'serverSpec.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
    ]
  },
  externals: webpackUtil.createExternalsCompliantNodeModules(),
  devtool: 'sourcemap'
}