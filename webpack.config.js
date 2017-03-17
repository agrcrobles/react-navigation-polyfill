const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src', 'index.js')
  ],
  externals: {
    react: 'react',
    'react/lib/ReactComponentWithPureRenderMixin': 'react/lib/ReactComponentWithPureRenderMixin',
    'react-native': 'react-native'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules(?!\/react-native-tab-view)/,
        use: [
          {
            loader: 'babel-loader?+cacheDirectory'
          },
        ],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            query: { name: '[name].[hash:16].[ext]' }
          }
        ]
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ReactNavigation.js',
    library: 'ReactNavigation',
    libraryTarget: 'umd',
    filename: 'index.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['.js'],
  }
};