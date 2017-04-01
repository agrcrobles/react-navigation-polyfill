/*
 * @noflow - get/set properties not yet supported by flow. also `...require(x)` is broken #6560135
 */

module.exports = {

  // Core
  get createNavigationContainer() { return require('react-navigation/lib/createNavigationContainer').default; },
  get StateUtils() { return require('react-navigation/lib/StateUtils').default; },
  get PropTypes() { return require('react-navigation/lib/PropTypes').default; },
  get addNavigationHelpers() { return require('react-navigation/lib/addNavigationHelpers').default; },
  get NavigationActions() { return require('react-navigation/lib/NavigationActions').default; },

  // Navigators
  get createNavigator() { return require('react-navigation/lib/navigators/createNavigator').default; },
  get StackNavigator() { return require('react-navigation/lib/navigators/StackNavigator').default; },
  get TabNavigator() { return require('react-navigation/lib/navigators/TabNavigator').default; },
  get DrawerNavigator() { return require('react-navigation/lib/navigators/DrawerNavigator').default; },

  // Routers
  get StackRouter() { return require('react-navigation/lib/routers/StackRouter').default; },
  get TabRouter() { return require('react-navigation/lib/routers/TabRouter').default; },

  // Views
  get Transitioner() { return require('react-navigation/lib/views/Transitioner').default; },
  get CardStack() { return require('react-navigation/lib/views/CardStack').default; },
  get DrawerView() { return require('react-navigation/lib/views/Drawer/DrawerView').default; },
  get TabView() { return require('react-navigation/lib/views/TabView/TabView').default; },

  // HOCs
  get withNavigation() { return require('react-navigation/lib/views/withNavigation').default; },
};
