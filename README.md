# Built in views for web

## Overview

This is an experiment that brings some behavior from the built-in [native](https://reactnavigation.org/docs/navigators/) navigator views of [react-navigation](https://reactnavigation.org) for native to the web.

Based on [Navigation Views](https://reactnavigation.org/docs/views/) this sample app implement some basic behaviors and styles following the react-native api  is implemented for `react-native`.

## DrawerNavigation

[DrawerNavigation](https://reactnavigation.org/docs/navigators/drawer) can't be used on web, instead a built in view with drawer is implemented using [react-sidebar](https://github.com/balloob/react-sidebar) ( drag and drop swippeable is not yet supported )
 - More info on api check [here](https://github.com/agrcrobles/react-navigation-web/issues/3)
 - More working code see the [examples](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/drawer.js)

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

[StackNavigator](https://reactnavigation.org/docs/navigators/stack) can be used on web, instead a swipeable built in view is implemented using [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) ( drag and drop not yet supported )
 - More info on api check [here](https://github.com/agrcrobles/react-navigation-web/issues/1)
 - More working code see the [examples](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/stack.js)

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

[TabNavigator](https://reactnavigation.org/docs/navigators/tab) can't be used on web, instead a built in view contaning a header is implemented.

 - More info on api check [here](https://github.com/agrcrobles/react-navigation-web/issues/2)
 - More working code see the [examples](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/tab.js)


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

### Install react-navigation-web-web
```
npm i --save-dev react-navigation-web
```

## Configure Redux yourself

Next just use your redux store out of the box. Invoke [addNavigationHelpers](https://reactnavigation.org/docs/guides/redux) and bind your state using `getStateForAction` as always.

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

[Here](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/navigation.js) you can find more information.

### Create your pages

Use react-native tags and syntax to create your scenes and pages.

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
Page.navigationOptions = {
  title: () => 'Firulais'
};
```
## Known issues

It doesn't work with webpack 2: As it has been discussed [here](https://github.com/react-community/react-navigation/issues/188) libraries for react-navigation are not transpiled.

This is happens because react-native transpile every module in the packager and the same behavior is expected in the [webpack.config](https://github.com/agrcrobles/react-navigation-web/blob/master/src/examples/webpack.config.js#L26) include node_modules folder.

## Overall

This library si meant as a temporary solution following the [discussion](https://github.com/react-community/react-navigation/issues/174) in react-navigation and, mainly, because there isn't a built-in one for web.

## Contributing

Any help, stars ✭ and issue reporting are always welcome!

## Working examples

```
$ yarn
$ yarn start
```
Open `http://localhost:3000/`
