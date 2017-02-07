import React from 'react';

export const Bar = (props) => {
  const title = props.router.getScreenConfig({
    state: props.navigation.state.routes[props.navigation.state.index],
  }, 'title');
  // add back
  if (props.navigation.state.routes.length > 1) {
    return (
      <div style={{...props.titleStyle, ...headerStyles}}>
        <div onClick={() => props.navigation.goBack()} style={back}>
          <svg width="40" height="45">
            <polygon fill="#2196F3" points="15.4,21.5 17,20 9,12 17,4.1 15.5,2.5 6,12 "></polygon>
          </svg>
        </div>
        <div>
          {title || props.route}
        </div>
      </div>
      
    );
  }
  return <div style={{...props.titleStyle, ...headerStyles}}>{title || props.route}</div>;
}
const back = {
  position: 'absolute',
  cursor: 'pointer',
  top: 7
};
const headerStyles = {
  textAlign: 'center',
  padding: 10,
  boxShadow: '0 0 2px 0'
};