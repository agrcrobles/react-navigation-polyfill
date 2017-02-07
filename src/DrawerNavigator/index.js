import React from 'react';

import {
  addNavigationHelpers,
  createNavigationContainer
} from 'react-navigation';

import { connect } from 'react-redux';

import Sidebar from './sidebar';

import { View, StyleSheet } from 'react-native';

import { defaultContent } from './defaults';

class DrawerNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }

  toggleSidebarOpen() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  }

  render() {
    const { navigation, router } = this.props;
    const Component = router.getComponentForState(navigation.state);

    return (
      <View style={{flex: 1}} onClick={() => this.toggleSidebarOpen()}>
        <Sidebar
          {...this.props}
          navigation={addNavigationHelpers({
            ...navigation
          })}
          routes={this.props.routes}
          sidebarOpen={this.state.sidebarOpen}
          styles={this.props.styles}
        >
          <Component
            navigation={addNavigationHelpers({
              ...navigation,
              state: navigation.state.routes[navigation.state.index]
            })}
          />
        </Sidebar>
      </View>
    );
  }
};

export default DrawerNavigator;
