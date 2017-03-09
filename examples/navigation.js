import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';

import { connect } from 'react-redux';

import Nav from './js/App';

export const Navigator = Nav;

// Your main App
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

//Return your data to your provider
export default connect(mapStateToProps)(App);
