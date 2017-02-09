import React from 'react';
import Sidebar from 'react-sidebar';

import { View, StyleSheet, Text } from 'react-native';

import { invoke } from '../helpers';

const SidebarContent = (props) => <View style={innerStyles.content}>
  {
    Object.keys(props.routes).map((item, index) => {

      const configKey = {
        state: {
          routeName: item
        }
      };
      let inner = props.router.getScreenConfig(
        configKey,
      'title') || item;

      const drawer = invoke(
        props.router.getScreenConfig(
          configKey,
          'drawer')
        , props);

      if (drawer) {
        const label = invoke(drawer.label, props);
        if (typeof label === 'function') {
          inner = <label />;
        } else if (label) {
          inner = label
        };

        const icon = invoke(drawer.icon, props);
        if (typeof icon === 'function') {
          inner = <icon />;
        } else if (icon) {
          inner = icon
        };

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
    paddingRight: 250,
    cursor: 'pointer',
    fontWeight: 600
  },
  itemSelected: {
    fontWeight: 600,
    padding: 20,
    paddingRight: 250,
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
        styles={{sidebar:this.props.config.contentOptions.style}}
        pullRight={this.props.config.drawerPosition === 'right'}
      >
        {this.props.children}
      </Sidebar>
    );
  }
}

export default Component;
