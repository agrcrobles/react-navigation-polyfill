import React from 'react';

import {
  StackRouter,
  createNavigator
} from 'react-navigation';

import Drawer from './DrawerNavigator';
import Tab from './TabNavigator';
import Stack from './StackNavigator';

export const StackNavigator = (RouteConfigs, StackNavigatorConfig) => {
  const Routes = StackRouter(RouteConfigs);
  return createNavigator(Routes, StackNavigatorConfig)(Stack);
};

export const DrawerNavigator = (RouteConfigs, StackNavigatorConfig) => {
  const Routes = StackRouter(RouteConfigs);
  return createNavigator(Routes, StackNavigatorConfig)(Drawer);
};

export const TabNavigator = (RouteConfigs, StackNavigatorConfig) => {
  const Routes = StackRouter(RouteConfigs);
  return createNavigator(Routes, StackNavigatorConfig)(Tab);
};
