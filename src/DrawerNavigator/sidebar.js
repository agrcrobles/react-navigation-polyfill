import React from 'react';
import Sidebar from 'react-sidebar';

import { View, StyleSheet, Text } from 'react-native';

import { defaultContent } from './defaults';

const SidebarContent = (props) => <View style={innerStyles.content}>
  {
    Object.keys(props.routes).map((item, index) => {

      const invokeIt = (result) => {
        if (typeof result === 'function') {
          return result();
        }
        if (result) {
          return result;
        }
        return;
      }
      const getProp = (state, prop, alt) => {
        const result = props.router.getScreenConfig(state, prop);
        return invokeIt(result) || alt;
      }

      const configKey = {
        state: {
          routeName: item
        }
      };
      let inner;
      const drawer = getProp(configKey, 'drawer');

      if (drawer) {
        const icon = invokeIt(drawer.icon);
        if (typeof icon === 'function') {
          inner = <icon />;
        } else if (icon) {
          inner = icon
        } else if (typeof drawer.label === 'function' ) {
          inner = <drawer.label />
        } else if (drawer.label) {
          inner = drawer.label
        }
      }
      if (props.selected.routeName === item) {
        return (
          <div key={item} style={
            styles.itemSelected
          }>
              {inner}
          </div>
        );
      }
      return (
        <div key={item} style={
          styles.item
        } onClick={() => props.navigation.navigate(item)}>
            {inner}
        </div>
      );

    })
  }
</View>;

const styles = {
  item: {
    padding: 20,
    paddingRight: 150,
    cursor: 'pointer',
    fontWeight: 600
  },
  itemSelected: {
    fontWeight: 600,
    padding: 20,
    paddingRight: 150,
    color: '#2196F3',
    backgroundColor: '#eee'
  }
};
const innerStyles = StyleSheet.create({
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
        styles={{sidebar:defaultContent.style}}
        pullRight={this.props.config.drawerPosition === 'right'}
      >
        {this.props.children}
      </Sidebar>
    );
  }
}

export default Component;
