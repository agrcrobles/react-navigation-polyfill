import React from 'react';

import { Bar } from './bar';

const Card = (props) => {
  const Component = props.router.getComponentForRouteName(props.scene.routeName);

  const navigate = props.navigation.navigate;
  props.navigation.navigate = (route, params, action) => {
    props.handleClick(props.index + 1);
    navigate(route, params, action);
  };
  const back = props.navigation.goBack;
  props.navigation.goBack = (route, params, action) => {
    props.handleClick(props.index);
    back(route, params, action);
  };

  const route = props.routes[props.scene.routeName];

  const options = {
    ...props.config.navigationOptions,
    title: route.title || props.scene.routeName,
    ...route.screen.navigationOptions,
  }
  if (options.visible) {

    return <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }} key={props.index}>
      <Bar
        titleStyle={route.titleStyle || {}}
        route={props.scene.routeName}
        navigation={props.navigation}
        options={options}
        router={props.router}
        config={props.config}
      />
      <Component
        index={props.index}
        {...props}
      />
    </div>;
  }
  return <Component key={props.index} index={props.index} {...props} />;
};

export default Card;
