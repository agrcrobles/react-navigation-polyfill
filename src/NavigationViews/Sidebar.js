import React from 'react';
import Sidebar from 'react-sidebar';

import { View, StyleSheet, TouchableOpacity } from 'react-native';

const SidebarContent = (props) => <View style={styles.sidebar}>
  {
    Object.keys(props.routes).map((k) => <View key={k} style={styles.item}>
      <TouchableOpacity onPress={() => props.navigation.navigate(k)}>
        {k}
      </TouchableOpacity>
    </View>)
  }
</View>;

const styles = StyleSheet.create({
  sidebar: {
    flex: 1
  },
  item: {
    padding: 20,
    paddingRight: 100,
    cursor: 'pointer'
  }
});

class Component extends React.Component {
  render() {
    return (
      <Sidebar
        sidebar={<SidebarContent {...this.props} />}
        open={this.props.sidebarOpen}
        onSetOpen={this.props.onSetSidebarOpen}
        styles={sidebarStyles}
      >
        {this.props.children}
      </Sidebar>
    );
  }
}
const sidebarStyles = {
  sidebar: {
    opacity: 1,
    backgroundColor: 'white'
  }
};
export default Component;
