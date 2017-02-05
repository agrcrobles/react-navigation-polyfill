import React from 'react';

import { addNavigationHelpers  } from 'react-navigation';

import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

import { DrawerNavigator } from './NavigationViews';

import { connect } from 'react-redux';

const Home = ({ navigation }) => (
  <View style={styles.container} >

    <Text style={styles.text}>
      This is Home Page
    </Text>

    <Button title="Page" style={styles.button} onPress={() => navigation.navigate('Page')} />
  </View>
);
const Page = ({ navigation }) => (
  <View style={styles.container} >

    <Text style={styles.text}>
      Page {((navigation.state || {}).params || {}).index}
    </Text>

    <Button title="Back" style={styles.button} onPress={() => navigation.goBack()} />

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    padding: 20,
    alignSelf: 'center'
  },
  button: {
    flex: 1
  },
});

const routes = {
  Home: {
    screen: Home,
    path: 'home'
  },
  Page: {
    screen: Page,
    path: 'page'
  }
};

export const Navigator = DrawerNavigator(routes);

const App = (props) => (
  <Navigator
    routes={routes}
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.navigation
    })}
  />
);

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

export default connect(mapStateToProps)(App);
