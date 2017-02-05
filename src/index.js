import React from 'react';

import {
  StackRouter,
  TabRouter,
  createNavigator
} from 'react-navigation';

import { StyleSheet } from 'react-native'

import Drawer from './DrawerNavigator';
import Tab from './TabNavigator';
import Stack from './StackNavigator';

export const StackNavigator = (RouteConfigs, StackNavigatorConfig) => {
  const Routes = StackRouter(RouteConfigs);
  return createNavigator(Routes, StackNavigatorConfig)(Stack);
};

export const DrawerNavigator = (RouteConfigs, StackNavigatorConfig = {}) => {

  const Routes = StackRouter(RouteConfigs);
  
  return createNavigator(Routes)(((props) => <Drawer {...props} styles={StackNavigatorConfig.styles} inlineStyles={StackNavigatorConfig.inlineStyles} />));
};

export const TabNavigator = (RouteConfigs, StackNavigatorConfig = {}) => {
  const Routes = TabRouter(RouteConfigs);

  return createNavigator(Routes)((props) => <Tab {...props} styles={StackNavigatorConfig.styles} />);
};
