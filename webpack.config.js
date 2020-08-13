const path = require('path');

module.exports = {
  mode: 'production',
  entry: './மூலம்/லஸ்ஸியிலக்கணங்கள்/வாடிக்கையாளர்.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};