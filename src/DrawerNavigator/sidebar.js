import React from 'react';
import Sidebar from 'react-sidebar';

import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { defaultContent } from './defaults';

const SidebarContent = (props) => <View style={styles.content}>
  {
    Object.keys(props.routes).map((item, index) => {

      const configKey = {
        state: {
          routeName: item
        }
      };
      const drawer = props.router.getScreenConfig(configKey, 'drawer');
      return (
        <TouchableOpacity key={item} style={styles.item} onPress={() => props.navigation.navigate(item)}>
          {(drawer && drawer.label) || item}
        </TouchableOpacity>
      );
    })
  }
</View>;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    paddingRight: 100,
    cursor: 'pointer'
  },
  content: {
    flex: 1
  }
});

class Component extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Sidebar
        sidebar={<SidebarContent {...this.props} />}
        open={this.props.sidebarOpen}
        onSetOpen={this.props.onSetSidebarOpen}
        styles={{sidebar:defaultContent.style}}
        pullRight={this.props.config.drawerPosition === 'right'}
      >
        {this.props.children}
      </Sidebar>
    );
  }
}

export default Component;
