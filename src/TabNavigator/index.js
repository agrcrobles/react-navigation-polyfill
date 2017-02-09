import React from 'react';

import { Bar } from './bar';

import {
  addNavigationHelpers
} from 'react-navigation';

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
              navigationOptions={navigationOptions}
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
