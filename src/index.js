import React from 'react';

import {
  StackRouter,
  TabRouter,
  createNavigator
} from 'react-navigation';

import {
  defaultConfig as StackDefaultConfig
} from './StackNavigator/defaults';

import {
  defaultConfig as TabNavigatorDefaultConfig
} from './TabNavigator/defaults';

import {
  defaultConfig as DrawerNavigatorDefaultConfig
} from './DrawerNavigator/defaults';


import Drawer from './DrawerNavigator';
import Tab from './TabNavigator';
import Stack from './StackNavigator';

export const StackNavigator = (RouteConfigs, StackNavigatorConfig) => {
  const Config = {
    ...StackDefaultConfig,
    ...StackNavigatorConfig
  };

  const {
    initialRouteName,
    initialRouteParams,
    paths,
    navigationOptions,
  } = Config;

  const stackRouterConfig = {
    initialRouteName,
    initialRouteParams,
    paths,
    navigationOptions: {
      ...StackDefaultConfig.navigationOptions,
      ...StackNavigatorConfig.navigationOptions
    }
  };

  const Routes = StackRouter(RouteConfigs, stackRouterConfig);

  return createNavigator(Routes, StackNavigatorConfig)((props) => <Stack {...props} config={Config} />);
};

export const DrawerNavigator = (RouteConfigs, DrawerNavigatorConfig) => {
  const Config = {
    ...DrawerNavigatorDefaultConfig,
    ...DrawerNavigatorConfig
  };

  const {
    initialRouteName,
    initialRouteParams,
    paths,
    navigationOptions
  } = Config;

  const drawerRouterConfig = {
    initialRouteName,
    initialRouteParams,
    paths,
    navigationOptions,
  };
  // todo: move to TabRouter when stable

  const Routes = StackRouter(RouteConfigs, drawerRouterConfig);

  return createNavigator(Routes)(((props) => <Drawer {...props} config={Config} />));
};

export const TabNavigator = (RouteConfigs, TabNavigatorConfig) => {
  const Config = {
    ...TabNavigatorDefaultConfig,
    ...TabNavigatorConfig,
    navigationOptions: {
      ...TabNavigatorDefaultConfig.navigationOptions,
      ...TabNavigatorConfig.navigationOptions
    }
  };

  const {
    initialRouteName,
    initialRouteParams,
    paths,
    navigationOptions,
  } = Config;

  const tabRouterConfig = {
    initialRouteName,
    initialRouteParams,
    paths,
    navigationOptions,
  };

  const Routes = StackRouter(RouteConfigs, tabRouterConfig);

  return createNavigator(Routes)((props) => <Tab {...props} config={Config} />);
};
