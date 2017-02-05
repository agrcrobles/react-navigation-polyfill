# Experiments react-navigation in web + redux + hot reload!

## Overview

Just an idea, this is an experiment to bring some behaviors of the components of [react-navigation](https://reactnavigation.org) to the web.

To do that there is implemented some basic and similar behaviors and styles as an experiment getting close in the way that [Navigation Views](https://reactnavigation.org/docs/views/) is implemented for `react-native` and you cannot find in web for now.

## DrawerNavigation

Since it is not possible use [DrawerNavigation](https://reactnavigation.org/docs/navigators/drawer) on web, instead a navigator view containing a drawer is implemented by [react-sidebar](https://github.com/balloob/react-sidebar) on it no swippeable.

![alt tag](https://raw.githubusercontent.com/agrcrobles/react-navigation-web/master/assets/Drawer.gif)

```
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
```

## StackNavigation

Since it is not possible use [StackNavigator](https://reactnavigation.org/docs/navigators/stack) on web, instead a swipeable navigator view is implemented contaning an no drag and drop supported. [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) on it 

![alt tag](https://raw.githubusercontent.com/agrcrobles/react-navigation-web/master/assets/Stack.gif)

```
export const Stack = (routes) => StackNavigator(routes);
```

## TabNavigation

Since it is not possible use [TabNavigator](https://reactnavigation.org/docs/navigators/tab) on web, instead a [swipeable navigator view](https://github.com/oliviertassinari/react-swipeable-views) is implemented containg a header on it.

![alt tag](https://raw.githubusercontent.com/agrcrobles/react-navigation-web/master/assets/Tab.gif)

```
export const Tab = (routes) => TabNavigator(routes, {
  styles: {
    header: {
      backgroundColor: '#999',
      color: '#fbfbfb',
    },
    item: {
      padding: 10,
      textAlign: 'center'
    },
    itemSelected: {
      borderBottom: 'solid 4px #444'
    }
  }
});
```

## Quick start

## Define your routes
```
const routes = {
  Home: {
    screen: Home,
    path: 'home'
  },
  Page: {
    screen: Page,
    path: 'page'
  }
};
```

### Create your pages
```
import React from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

import { connect } from 'react-redux';

// home page
const Home = ({ navigation }) => (
  <View style={styles.container} >
    <Text style={styles.text}>
      This is Home Page
    </Text>
    <Button title='Page' style={styles.button} onPress={() => navigation.navigate('Page')} />
  </View>
);
// any other page
const Page = ({ navigation }) => (
  <View style={styles.container} >
    <Text style={styles.text}>
      Page
    </Text>
    <Button title='Back' style={styles.button} onPress={() => navigation.goBack()} />
  </View>
);
```

## Navigator View react-native way
```
// choose among any of them as you can do in react-native
import { TabNavigator, StackNavigator, DrawerNavigator } from '../';

// exporting your `<Navigator />` to do `Navigator.router.getStateForAction(action, state)` in `redux`
export const Navigator = StackNavigator(routes);

// your main App
const App = (props) => (
  <Navigator
    routes={routes}
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.navigation
    })}
  />
);

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

// returns your data to your provider
// Importing `<App />` just to be rendered
export default connect(mapStateToProps)(App);
```

## Try and Run it yourself
```
yarn
yarn start
```
Open `http://localhost:3000/`

