import React from 'react';

import SwipeableViews from 'react-swipeable-views';

import { Bar } from './bar';

const Scene = (props) => {
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
    this.setState({
      index
    })
  }
  render() {
    const { tabBarOptions } = this.props.config;

    return (
      <div>
        <div style={tabBarOptions.style}>
          {Object.keys(this.props.routes).map((route, index) =>
            <Bar
              config={this.props.config}
              selected={this.state.index}
              index={index}
              key={index}
              router={this.props.router}
              navigation={this.props.navigation}
              route={route}
              />
            )
          }
        </div>
        <SwipeableViews index={this.state.index}>
          {this.props.navigation.state.routes.map(
            // Uncaught TypeError: Cannot read property 'routes' of null
            (scene, index) => Scene({
              ...this.props,
              scene,
              index,
              handleClick: this.handleClick.bind(this)
            })
          )}
      </SwipeableViews>
      </div>
    );
  }
}

export default TabNavigator;
