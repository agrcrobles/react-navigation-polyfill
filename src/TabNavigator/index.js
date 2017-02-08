import React from 'react';

import { Bar } from './bar';

import {
  addNavigationHelpers
} from 'react-navigation';

const Scene = (props) => {
  console.log(props.scene.routeName);
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

class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  handleClick(index) {
    console.log(index);
    this.setState({
      index
    })
  }
  render() {
    const { navigationOptions } = this.props.config;

    const flexDirection = this.props.config.tabBarPosition === 'top' ?
      'column' : 'column-reverse';

    const { navigation, router } = this.props;

    const Component = router.getComponentForState(navigation.state);

    return (
      <div style={{
        display: 'flex',
        flexDirection,
        height: '100%'
      }}>
        <div style={{
          ...navigationOptions.style,
          display: 'flex'
        }}>
          {Object.keys(this.props.routes).map((route, index) =>
            <Bar
              config={this.props.config}
              selected={this.props.navigation.state.routes[this.props.navigation.state.index]}
              index={index}
              key={index}
              router={this.props.router}
              navigation={this.props.navigation}
              route={route}
              />
            )
          }
        </div>
        <Component
          navigation={addNavigationHelpers({
            ...navigation,
            state: navigation.state.routes[navigation.state.index]
          })}
        />
      </div>
    );
  }
}

export default TabNavigator;

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
