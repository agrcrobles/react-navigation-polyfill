import React from 'react';

import {
  StyleSheet
} from 'react-native';

//export navigator in order to get state for action in redux
import { TabNavigator, StackNavigator, DrawerNavigator } from '../';

export const Tab = (routes) => TabNavigator(routes, {
  styles: {
    header: {
      backgroundColor: '#999',
      display: 'flex',
      color: '#fbfbfb',
    },
    item: {
      padding: 10,
      cursor: 'pointer',
      flex: 1,
      textAlign: 'center'
    },
    itemSelected: {
      padding: 10,
      cursor: 'pointer',
      flex: 1,
      textAlign: 'center',
      borderBottom: 'solid 4px #444'
    }
  }
});

export const Stack = (routes) => StackNavigator(routes);

export const Drawer = (routes) => DrawerNavigator(routes, {
  styles: {
    sidebar: {
      opacity: 1,
      backgroundColor: 'white'
    }
  },
  inlineStyles: StyleSheet.create({
    item: {
      padding: 20,
      paddingRight: 100,
      cursor: 'pointer'
    },
    main: {
      flex: 1
    }
  })
});
