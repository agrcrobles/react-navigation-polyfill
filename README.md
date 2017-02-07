# react-navigation in web + redux + hot reload!

## Overview

This is an experiment to bring some behaviors of the built-in [native](https://reactnavigation.org/docs/navigators/) navigators of [react-navigation](https://reactnavigation.org) to the web.

To do that there is implemented some basic and similar behaviors and styles following the react-native api getting close in the way that [Navigation Views](https://reactnavigation.org/docs/views/) is implemented for `react-native` and you cannot find in web for now.

## DrawerNavigation

Since it is not possible use [DrawerNavigation](https://reactnavigation.org/docs/navigators/drawer) on web, instead a navigator view containing a drawer is implemented by [react-sidebar](https://github.com/balloob/react-sidebar) on it ( no drag and drop swippeable supported )
 - For more info about the supported api check it [here](https://github.com/agrcrobles/react-navigation-web/issues/3)
 - For some working code see [example](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/drawer.js)

![alt tag](https://raw.githubusercontent.com/agrcrobles/react-navigation-web/master/assets/Drawer.gif)

```
import { DrawerNavigator } from 'react-navigation-web';

import Page from './Page';

const Main = class Main extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Main',
      })
    }
  }
  render() {
    return (
      <View>Something great here in the drawer component!</View>
    );
  }
}

export const Navigator = DrawerNavigator({
  Page: { screen: Page },
  Main: { screen: Main }
}, {
  initialRouteName: 'Main',
  drawerPosition: 'left'
});

```

## StackNavigation

Since it is not possible use [StackNavigator](https://reactnavigation.org/docs/navigators/stack) on web, instead a swipeable navigator view is implemented contaning a [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) on it ( no drag and drop supported )
 - For more info about the supported api check it [here](https://github.com/agrcrobles/react-navigation-web/issues/1)
 - For some working code see [example](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/stack.js)

![alt tag](https://raw.githubusercontent.com/agrcrobles/react-navigation-web/master/assets/Stack.gif)

```
import { StackNavigator } from 'react-navigation-web';

import Page from './Page';

const Main = class Main extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Page', { name: 'Giselle' })}
        label="Go to Giselle's profile"
      />
    );
  }
}

export const Navigator = StackNavigator({
  Main: { screen: Main },
  Page: { screen: Page }
}, {
  headerMode: 'screen' //'none'
});
```

## TabNavigation

Since it is not possible use [TabNavigator](https://reactnavigation.org/docs/navigators/tab) on web, instead a [swipeable navigator view](https://github.com/oliviertassinari/react-swipeable-views) is implemented contaning a header on it.

 - For more info about the supported api check it [here](https://github.com/agrcrobles/react-navigation-web/issues/2)
 - For some working code see [example](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/tab.js)


![alt tag](https://raw.githubusercontent.com/agrcrobles/react-navigation-web/master/assets/Tab.gif)

```
import { TabNavigator } from 'react-navigation-web';

import Page from './Page';

class Main extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Home'
    }
  }
  render() {
    return (
      <View>Something great here in the tab component!</View>
    );
  }
}

export const Navigator = TabNavigator({
  Main: { screen: Main },
  Page: { screen: Page }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    style: {
      backgroundColor: '#999',
      display: 'flex',
      color: '#fbfbfb'
    },
  },
});

```

## Quick start

### Install react-navigator-web
```
npm i --save-dev https://github.com/agrcrobles/react-navigation-web.git
```

### Create your pages...
```
export const Page = ({ navigation }) => (
  <View >
    <Text>This is a Page</Text>
    <Button
      title='Page'
      style={styles.button}
      onPress={() => navigation.navigate('Home')} 
    />
  </View>
);
```

## Redux

Use [addNavigationHelpers](https://reactnavigation.org/docs/guides/redux) and bind your state with `getStateForAction`

```
// passing your navigator through your main App
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

// returns your <App /> to be rendered

export default connect(mapStateToProps)(App);
```

## Working examples

Try it yourself

```
yarn
yarn start
```
Open `http://localhost:3000/`
