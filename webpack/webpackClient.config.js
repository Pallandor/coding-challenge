'use strict';

const path = require('path');
const clientPlugins = require('./plugins/client');
const clientLoaders = require('./loaders/client');

const devmode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: path.join(__dirname, '..', 'client/index.js'),
  },

  output: {
    path: path.join(__dirname, 'build-client'),
    filename: '[name].[chunkhash].js',
  },

  devtool: !devmode ? 'source-map' : 'inline-source-map',

  plugins: clientPlugins,

  module: {
    loaders: [
      clientLoaders.js,
      clientLoaders.json,
      // add css
    ],
  }

};
