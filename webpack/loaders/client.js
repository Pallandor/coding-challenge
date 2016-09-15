exports.js = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

exports.json = {
  test: /\.json$/,
  loader: 'json',
};
