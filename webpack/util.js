const fs = require('fs');

exports.createExternalsCompliantNodeModules = () => {
  const nodeModules = {};
  fs.readdirSync('node_modules') // NOTE: Care relative path!
    .filter(x => {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(mod => {
      nodeModules[mod] = 'commonjs ' + mod;
    });
  return nodeModules;
};
