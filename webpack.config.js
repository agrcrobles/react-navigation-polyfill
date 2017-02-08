const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  externals: {
    react: 'react'
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          require.resolve('url-loader'),
          require.resolve('img-loader')
        ]
      },
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true },
 		     presets: ['es2015', 'react', 'stage-0'],
	       plugins: ['transform-object-rest-spread', 'transform-flow-strip-types']
      }
    ]
  },
  output: {
    library: 'react-navigator-web',
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['./app/', './node_modules'],
    alias: {
      'react-native': 'react-native-web'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({})
  ]
};
