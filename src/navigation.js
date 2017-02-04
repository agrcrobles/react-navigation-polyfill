import React from 'react';

import {
  StackRouter,
  createNavigator,
  addNavigationHelpers
} from 'react-navigation';

import { connect } from 'react-redux';

import Home from './Home';
import Page from './Page';

const Router = StackRouter({
  Home: {
    screen: Home,
    path: 'home'
  },
  Page: {
    screen: Page,
    path: 'page/:index'
  }
});

const NavView = ({ navigation, router }) => {
  const Component = router.getComponentForState(navigation.state);
  return (
    <Component
      navigation={addNavigationHelpers({
        ...navigation,
        state: navigation.state.routes[navigation.state.index]
      })}
    />
  );
};

export const Navigator = createNavigator(Router)(NavView);

const App = (props) => (
  <Navigator
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

export default connect(mapStateToProps)(App);
