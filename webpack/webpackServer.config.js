const path = require('path');
const serverPlugins = require('./plugins/server');
const serverLoaders = require('./loaders/server');
const webpackUtil = require('./util');

const devmode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.join(__dirname, '..', 'server/index.js'),

  target: 'node',

  output: {
    path: path.join(__dirname, 'build/server'),
    filename: 'index.js',
  },

  module: {
    loaders: [
      serverLoaders.js,
      // add loaders here
    ],
  },

  externals: webpackUtil.createExternalsCompliantNodeModules(),

  plugins: serverPlugins,

  devtool: !devmode ? 'source-map' : 'inline-source-map',
};
