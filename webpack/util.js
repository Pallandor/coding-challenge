'use strict';

const fs = require('fs');

exports.createExternalsCompliantNodeModules = () => {
  let nodeModules = {};
  fs.readdirSync('node_modules') // NOTE: Care relative path!
    .filter(function(x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
      nodeModules[mod] = 'commonjs ' + mod;
    });
  return nodeModules;
};
