import React from 'react';

import SwipeableViews from 'react-swipeable-views';

export const Bar = (props) => {

  const { tabBarOptions } = props.config;

  const tabBar = props.router.getScreenConfig({
    state: {
      routeName: props.route
    },
  }, 'tabBar') || {};

  if (props.index === props.selected) {
    return <div style={{
      borderBottom: borderBottom(tabBarOptions.activeTintColor),
      ...defaultStyle.item
    }}>{tabBar.title || props.route}</div>
  }

  return <div onClick={() => {props.navigation.navigate(props.route)}} style={{
    ...defaultStyle.item,
    ...tabBarOptions.labelStyle
  }}>{tabBar.title || props.route}</div>
}

const borderBottom = (color) => `solid 4px ${color}`;

const defaultStyle = {
  item: {
    flex: 1,
    textAlign: 'center',
    padding: 10
  }
};