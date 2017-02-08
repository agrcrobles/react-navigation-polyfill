# Built in views for web

## Overview

This is an experiment to bring some behaviors of the built-in [native](https://reactnavigation.org/docs/navigators/) navigator views of [react-navigation](https://reactnavigation.org) from native to the web.

To do that there is implemented some basic and similar behaviors and styles following the react-native api getting close in the way that [Navigation Views](https://reactnavigation.org/docs/views/) is implemented for `react-native` and you cannot find in web for now.

## DrawerNavigation

Since it is not possible use [DrawerNavigation](https://reactnavigation.org/docs/navigators/drawer) on web, instead a built in view with drawer is implemented by [react-sidebar](https://github.com/balloob/react-sidebar) on it ( no drag and drop swippeable supported )
 - For more info about the supported api check it [here](https://github.com/agrcrobles/react-navigation-web/issues/3)
 - For some working code see [example](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/drawer.js)

![alt tag](https://raw.githubusercontent.com/agrcrobles/react-navigation-web/master/assets/Drawer.gif)

```
import { DrawerNavigator } from 'react-navigation-web';

import Page from './Page';

const Main = class Main extends Component {
  static navigationOptions = {
    drawer: () => ({
      icon: () => <Text>Main</Text>,
    })
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

Since it is not possible use [StackNavigator](https://reactnavigation.org/docs/navigators/stack) on web, instead a swipeable built in view is implemented contaning a [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) on it ( no drag and drop supported )
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

Since it is not possible use [TabNavigator](https://reactnavigation.org/docs/navigators/tab) on web, instead a built in view for me is implemented contaning a header on it.

 - For more info about the supported api check it [here](https://github.com/agrcrobles/react-navigation-web/issues/2)
 - For some working code see [example](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/tab.js)


![alt tag](https://raw.githubusercontent.com/agrcrobles/react-navigation-web/master/assets/Tab.gif)

```
import { TabNavigator } from 'react-navigation-web';

import Page from './Page';

class Main extends React.Component {
  static navigationOptions = {
    tabBar: () ({
      label: 'Home',
      icon: (props) => <Text>Home</Text>
    })
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
  navigationOptions: {
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
npm i --save-dev react-navigator-web
```

## Configure Redux yourself

So simple, use your redux store out of the box, just invoke [addNavigationHelpers](https://reactnavigation.org/docs/guides/redux) and bind your state with `getStateForAction` as it is said in the documentation

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

Go [here](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/navigation.js) for more information

### Create your pages

Use react-native tags and syntax to create your scenes and pages

```
export const Page = ({ navigation }) => (
  <View>
    <Text>This is a Page</Text>
    <Button
      title='Page'
      style={styles.button}
      onPress={() => navigation.navigate('Home')}
    />
  </View>
);
```
## Known issues

It doesn't work with webpack 2: As it has been discussed [here](https://github.com/react-community/react-navigation/issues/188) libraries for react-navigation are not transpiled.

This is because react-native transpile every module in the packager so the same behavior is expected in the [webpack.config](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/webpack.config.js#L26) include node_modules folder.

## Overall

This library comes as a temporary solution from the [discussion](https://github.com/react-community/react-navigation/issues/174) in react-navigation because there aren't built in for web.

## Contributing

Any help, stars ✭ and issue reporting are always welcome!

## Working examples

```
$ yarn
$ yarn start
```
Open `http://localhost:3000/`
