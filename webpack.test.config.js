var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './app/tests/index'
  },

  output: {
    path: __dirname + '/test/',
    publicPath: 'test/',
    filename: 'test.js',
    sourceMapFilename: 'test.js.map',
    chunkFilename: 'test.chunk.js'
  },

  resolve: {
    extensions: ['','.ts','.js','.json', '.css', '.html']
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
