import React from 'react';

import {
  addNavigationHelpers,
  createNavigationContainer
} from 'react-navigation';

import { connect } from 'react-redux';

import Sidebar from './Sidebar';

import { View, StyleSheet } from 'react-native';


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
      <View style={this.props.inlineStyles.main} onClick={() => this.toggleSidebarOpen()}>
        <Sidebar
          navigation={addNavigationHelpers({
            ...navigation,
            state: navigation.state.routes[navigation.state.index],
          })}
          routes={this.props.routes}
          sidebarOpen={this.state.sidebarOpen}
          inlineStyles={this.props.inlineStyles}
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

