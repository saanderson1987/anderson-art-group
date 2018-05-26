const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'frontend/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: 'source-map'
};


// entry: '/frontend/index.js',
