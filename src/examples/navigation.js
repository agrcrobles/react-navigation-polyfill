import React, { Component} from 'react';

import { addNavigationHelpers  } from 'react-navigation';

import { connect } from 'react-redux';

import { Routes, Navigator as Nav } from './drawer';
// import { Routes, Navigator as Nav } from './tab';
// import { Routes, Navigator as Nav } from './stack';

export const Navigator = Nav;

// Your main App
const App = (props) => (
  <Navigator
    routes={Routes}
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

//Return your data to your provider
export default connect(mapStateToProps)(App);
