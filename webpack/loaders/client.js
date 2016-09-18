exports.js = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

exports.json = {
  test: /\.json$/,
  loader: 'json',
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css-loader',
};
