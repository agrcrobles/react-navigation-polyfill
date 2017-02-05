import React from 'react';
import Sidebar from 'react-sidebar';

import { View, StyleSheet, TouchableOpacity } from 'react-native';

const SidebarContent = (props) => <View style={styles.content}>
  {
    Object.keys(props.routes).map((k) => <View key={k} style={props.inlineStyles.item}>
      <TouchableOpacity onPress={() => props.navigation.navigate(k)}>
        {k}
      </TouchableOpacity>
    </View>)
  }
</View>;

const styles = StyleSheet.create({
  content: {
    flex: 1
  }
});

class Component extends React.Component {
  render() {
    return (
      <Sidebar
        sidebar={<SidebarContent {...this.props} />}
        open={this.props.sidebarOpen}
        onSetOpen={this.props.onSetSidebarOpen}
        styles={this.props.styles}
      >
        {this.props.children}
      </Sidebar>
    );
  }
}

export default Component;
