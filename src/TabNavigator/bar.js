import React from 'react';

export const Bar = (props) => {

  const { navigationOptions: defaultOptions } = props.config;

  /* tested code here! */
  const route = {
    state: {
      routeName: props.route
    }
  };

  const tabBar = props.router.getScreenConfig(route, 'tabBar');
  const header = props.router.getScreenConfig(route, 'header');

  const options = {
    ...defaultOptions,
    tabBar,
    header: {
      ...defaultOptions.header,
      ...header
    }
  }
  if (options.header.visible) {
    let inner = options.title || props.route;

    let tabBar;

    if (typeof options.tabBar === 'function') {
      tabBar = options.tabBar({});
    } else if (options.tabBar) {
      tabBar = options.tabBar;
    }
    if (tabBar && tabBar.icon) {
      inner = tabBar.icon({
        tintColor: options.activeTintColor
      });
    }

    /* end of tested code */
    
    if (props.route === props.selected.routeName) {
      return <div style={{
        borderBottom: borderBottom('yellow'),
        ...defaultStyle.itemSelected,
        color: options.activeTintColor,
        backgroundColor: options.activeBackgroundColor
      }}>{inner}</div>
    }

    return <div onClick={() => {props.navigation.navigate(props.route)}} style={{
      ...defaultStyle.item,
      ...options.labelStyle,
      color: options.inactiveTintColor,
      backgroundColor: options.inactiveBackgroundColor
    }}>{inner}</div>
  }
}


const borderBottom = (color) => `solid 2px ${color}`;

const defaultStyle = {
  itemSelected: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 400,
    padding: 10
  },
  item: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 400,
    padding: 10
  }
};
