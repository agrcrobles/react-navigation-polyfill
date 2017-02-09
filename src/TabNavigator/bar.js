import React from 'react';

export const Bar = (props) => {

  const { navigationOptions: defaultOptions } = props;

  /* tested code here! */
  const route = {
    state: {
      routeName: props.route
    }
  };

  let tabBar = props.router.getScreenConfig(route, 'tabBar');
  const header = props.router.getScreenConfig(route, 'header');
  const title = props.router.getScreenConfig(route, 'title');

  const options = {
    ...defaultOptions,
    tabBar,
    header: {
      ...defaultOptions.header,
      ...header
    },
    title
  }
  if (!options.header.visible) {
    return null;
  }

  let inner = options.title || props.route;

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
    }}>{
      typeof inner === 'string' &&
      inner.toUpperCase() ||
      inner
    }</div>
  }

  return <div onClick={() => {props.navigation.navigate(props.route)}} style={{
    ...defaultStyle.item,
    ...options.labelStyle,
    color: options.inactiveTintColor,
    backgroundColor: options.inactiveBackgroundColor
  }}>{typeof inner === 'string' && inner.toUpperCase() || inner}</div>
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
