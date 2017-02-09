
import React from 'react';

import { Bar } from './bar';

import {
  addNavigationHelpers
} from 'react-navigation';

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

  return <Component index={props.index} key={props.index} {...props} />;
};

export default Card;


//   <SwipeableViews
//     style={{
//       height: '100%',
//       display: 'flex'
//     }}
//     containerStyle={{width: "100%"}}
//     index={this.state.index}
//     animateTransitions={this.props.config.animationEnabled}
//   >
//     {this.props.navigation.state.routes.map(
//       // Uncaught TypeError: Cannot read property 'routes' of null
//       (scene, index) => Scene({
//         ...this.props,
//         scene,
//         index,
//         handleClick: this.handleClick.bind(this)
//       })
//     )}
// </SwipeableViews>
