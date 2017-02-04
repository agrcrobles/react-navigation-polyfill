import React from 'react';

import {
  StackRouter,
  createNavigator,
  addNavigationHelpers
} from 'react-navigation';

import NavigationView from './NavigationViews/DrawerNavigationView';

import { connect } from 'react-redux';

import Home from './Home';
import Page from './Page';

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
const Router = StackRouter(routes);

export const Navigator = createNavigator(Router)(NavigationView);

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

export default connect(mapStateToProps)(App);
