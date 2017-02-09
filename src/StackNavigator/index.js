import React from 'react';

import Card from './card';

import SwipeableViews from 'react-swipeable-views';

class StackNavigator extends React.Component {
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
    return (
      <SwipeableViews
        containerStyle={{width: '100%'}}
        style={{height: '100%', display: 'flex'}}
        index={this.state.index}
      >
        {this.props.navigation.state.routes.map(
          (scene, index) => Card({
            ...this.props,
            scene,
            index,
            handleClick: this.handleClick.bind(this)
          })
        )}
      </SwipeableViews>
    );
  }
}

export default StackNavigator;
