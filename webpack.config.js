const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  target: 'electron',
	node: {
		__dirname: false,
		__filename: false
	},
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      }, {
        test: /(\.css)$|(\.scss$)/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.(eot|woff)$/,
        loader: 'file-loader',
      }, {
        test: /\.svg$/,
        loader: 'raw-loader',
      },

    ],
  },
  devServer: {
    port: 8081
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/monaco-editor/min/vs',
        to: 'vs',
      }
    ])
  ]
}
