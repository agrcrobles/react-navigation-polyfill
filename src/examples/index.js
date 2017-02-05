import React from 'react';

import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducers from './reducers';

import Navigation from './navigation';

const store = createStore(reducers);

const renderApp = () => <Provider store={store}>
  <Navigation />
</Provider>;

AppRegistry.registerComponent('ReactNavigationWebExamples', () => renderApp);

if (module.hot) {
  module.hot.accept();
  const nextReducer = require('./reducers').default;
  store.replaceReducer(nextReducer);
}

AppRegistry.runApplication('ReactNavigationWebExamples', {
  rootTag: document.getElementById('root')
});
