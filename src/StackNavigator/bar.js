import React from 'react';

export const Bar = (props) => {
  const state = {
    state: props.navigation.state.routes[props.navigation.state.index],
  };
  const { navigationOptions } = props.config;

  const getProp = (state, prop, alt) => {
    const result = props.router.getScreenConfig(state, prop);
    if (typeof result === 'function') {
      return result();
    }
    if (result) {
      return result;
    }
    return alt;
  }
  const title = getProp(state, 'title', navigationOptions.title);
  const header = getProp(state, 'header', navigationOptions.header);
  const titleStyle = getProp(state, 'titleStyle', navigationOptions.titleStyle);
  const tintColor = getProp(state, 'tintColor', navigationOptions.tintColor);

  // add back
  if (props.navigation.state.routes.length > 1) {
    return (
      <div style={{
        ...titleStyle,
        ...props.headerStyles,
        ...headerStyles,
        color: tintColor
      }}>
        <div onClick={() => props.navigation.goBack()} style={back}>
          <svg width="40" height="45">
            <polygon fill="#2196F3" points="15.4,21.5 17,20 9,12 17,4.1 15.5,2.5 6,12 "></polygon>
          </svg>
        </div>
        <div style={{
          paddingLeft: 30
        }}>
          {title || props.route}
        </div>
      </div>

    );
  }
  return <div style={{
    ...titleStyle,
    ...headerStyles,
    ...props.headerStyles,
    color: tintColor
  }}>{title || props.route}</div>;
}
const back = {
  position: 'absolute',
  cursor: 'pointer',
  top: 12
};
const headerStyles = {
  textAlign: 'left',
  fontWeight: 600,
  padding: 15,
  boxShadow: '0 0 3px 0'
};
