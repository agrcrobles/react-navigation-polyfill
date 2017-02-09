const defaultOptions = {
  inactiveTintColor: '#ddd',
  // activeBackgroundColor: '#999',
  activeTintColor: 'white',
  // inactiveBackgroundColor: '#999',
  style: {
    backgroundColor: '#2196F3',
    display: 'flex',
    color: '#fbfbfb'
  },
  labelStyle: {
    padding: 10,
    cursor: 'pointer',
    flex: 1,
    textAlign: 'center'
  },
  header: {
    visible: true
  },
};

export const defaultConfig = {
  tabBarComponent: '', // no implement
  tabBarPosition: 'top', // top
  swipeEnabled: '', // not swipe on web for now
  animationEnabled: true, // true
  lazyLoad: '', // no support
  navigationOptions: defaultOptions,
  order: '',
  backBehavior: '' // good question
};
