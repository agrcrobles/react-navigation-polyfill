const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src', 'index.js')
  ],
  externals: {
    react: 'react',
    'react/lib/ReactComponentWithPureRenderMixin': 'react/lib/ReactComponentWithPureRenderMixin',
    'react-native': 'react-native',
    'react-navigation': 'react-navigation',
    'react-navigation/lib/createNavigationContainer': 'react-navigation/lib/createNavigationContainer',
    'react-navigation/lib/StateUtils': 'react-navigation/lib/StateUtils',
    'react-navigation/lib/PropTypes': 'react-navigation/lib/PropTypes',
    'react-navigation/lib/addNavigationHelpers': 'react-navigation/lib/addNavigationHelpers',
    'react-navigation/lib/NavigationActions': 'react-navigation/lib/NavigationActions',
    'react-navigation/lib/navigators/createNavigator': 'react-navigation/lib/navigators/createNavigator',
    'react-navigation/lib/navigators/StackNavigator': 'react-navigation/lib/navigators/StackNavigator',
    'react-navigation/lib/navigators/TabNavigator': 'react-navigation/lib/navigators/TabNavigator',
    'react-navigation/lib/navigators/DrawerNavigator': 'react-navigation/lib/navigators/DrawerNavigator',
    'react-navigation/lib/routers/StackRouter': 'react-navigation/lib/routers/StackRouter',
    'react-navigation/lib/routers/TabRouter': 'react-navigation/lib/routers/TabRouter',
    'react-navigation/lib/views/Transitioner': 'react-navigation/lib/views/Transitioner',
    'react-navigation/lib/views/CardStack': 'react-navigation/lib/views/CardStack',
    'react-navigation/lib/views/Drawer/DrawerView': 'react-navigation/lib/views/Drawer/DrawerView',
    'react-navigation/lib/views/TabView/TabView': 'react-navigation/lib/views/TabView/TabView',
    'react-navigation/lib/views/withNavigation': 'react-navigation/lib/views/withNavigation' 
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
    new webpack.NamedModulesPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      // sourceMap: true
    })
  ],
  resolve: {
    extensions: ['.js'],
  }
};
