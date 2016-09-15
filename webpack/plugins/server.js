const webpack = require('webpack');

const basePlugins = [];
const prodPlugins = [];

const devPlugins = [
  new webpack.BannerPlugin('require("source-map-support").install();',
                           { raw: true, entryOnly: false }),
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
