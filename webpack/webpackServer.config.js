'use strict';

const path = require('path');
const serverPlugins = require('./plugins/server');
const serverLoaders = require('./loaders/server');
const webpackUtil = require('./util');

module.exports = {
  entry: path.join(__dirname, '..', 'server/index.js'),

  target: 'node',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
  },

  module: {
    loaders: [
      serverLoaders.js,
      // add loaders here
    ],
  },

  externals: webpackUtil.createExternalsCompliantNodeModules(),

  plugins: serverPlugins,

  devtool: 'sourcemap',
};
