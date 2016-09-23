const path = require('path');
const clientPlugins = require('./plugins/client');
const clientLoaders = require('./loaders/client');

const devmode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: path.join(__dirname, '..', 'client/index.js'),
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  devtool: !devmode ? 'source-map' : 'inline-source-map',

  plugins: clientPlugins,

  module: {
    loaders: [
      clientLoaders.js,
      clientLoaders.json,
      clientLoaders.css,
      // additional loaders
    ],
  },
};
