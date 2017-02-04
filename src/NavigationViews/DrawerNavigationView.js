import React from 'react';

import {
  addNavigationHelpers
} from 'react-navigation';

import { connect } from 'react-redux';

import Sidebar from './Sidebar';

import { View, StyleSheet } from 'react-native';


class DrawerNavigationView extends React.Component {
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
      <View style={styles.container} onClick={() => this.toggleSidebarOpen()}>
        <Sidebar
          navigation={addNavigationHelpers({
            ...navigation,
            state: navigation.state.routes[navigation.state.index],
          })}
          routes={this.props.routes}
          sidebarOpen={this.state.sidebarOpen}
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


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default DrawerNavigationView;

