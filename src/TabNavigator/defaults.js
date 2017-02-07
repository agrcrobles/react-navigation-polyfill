const defaultOptions = {
  activeTintColor: '#444',
  activeBackgroundColor: '#999',
  inactiveTintColor: '',
  inactiveBackgroundColor: '#999',
  style: {
    backgroundColor: '#999',
    display: 'flex',
    color: '#fbfbfb'
  },
  labelStyle: {
    padding: 10,
    cursor: 'pointer',
    flex: 1,
    textAlign: 'center'
  }
};

export const defaultConfig = {
  tabBarComponent: '', // no implement
  tabBarPosition: 'top', // top
  swipeEnabled: '', // not swipe on web for now
  animationEnabled: '', // true
  lazyLoad: '', // no support
  tabBarOptions: defaultOptions,
  Several: '',
  initialRouteName: '',
  order: '',
  paths: '',
  backBehavior: '' // good question
};
