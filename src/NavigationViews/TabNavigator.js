import React from 'react';

import SwipeableViews from 'react-swipeable-views';

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

const Header = (props) => {
  if (props.index === props.selected) {
    return <div style={styles.itemSelected}>{props.route}</div>
  }
  return <div onClick={() => {props.navigation.navigate(props.route)}} style={styles.item}>{props.route}</div>
}

class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
    console.log(Object.keys(props.routes));

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
      <div>
        <div style={styles.header}>
          {Object.keys(this.props.routes).map((route, index) => <Header selected={this.state.index} index={index} key={index} navigation={this.props.navigation} route={route} />)}
        </div>
        <SwipeableViews index={this.state.index}>
          {this.props.navigation.state.routes.map(
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
const styles = {
  header: {
    backgroundColor: "#999",
    display: "flex",
    color: "#fbfbfb",
  },
  item: {
    padding: 10,
    cursor: "pointer",
    flex: 1,
    textAlign: "center"
  },
  itemSelected: {
    padding: 10,
    cursor: "pointer",
    flex: 1,
    textAlign: "center",
    borderBottom: "solid 4px #444"
  }

}
export default TabNavigator;