import React from 'react';

import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducers from './reducers';

import Navigation from './navigation';

const store = createStore(reducers);

const renderApp = () => <Provider store={store}>
  <Navigation style={}/>
</Provider>;

AppRegistry.registerComponent('ReactNavigationWeb', () => renderApp);

if (module.hot) {
  module.hot.accept();
  const nextReducer = require('./reducers').default;
  store.replaceReducer(nextReducer);
}

AppRegistry.runApplication('ReactNavigationWeb', {
  rootTag: document.getElementById('root')
});
