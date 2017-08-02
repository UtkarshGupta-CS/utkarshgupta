const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
		filename: 'bundle.js',
		publicPath: '/',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
  /* plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ], */
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
  },
};
