import React from 'react';

import { addNavigationHelpers  } from 'react-navigation';

import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

import { connect } from 'react-redux';

// home page
const Home = ({ navigation }) => (
  <View style={styles.container} >

    <Text style={styles.text}>
      This is Home Page
    </Text>

    <Button title='Page' style={styles.button} onPress={() => navigation.navigate('Page')} />
  </View>
);
// any other page
const Page = ({ navigation }) => (
  <View style={styles.container} >

    <Text style={styles.text}>
      Page
    </Text>

    <Button title='Back' style={styles.button} onPress={() => navigation.goBack()} />

  </View>
);
// some styles
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

// routes
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

//Drawer Navigator
import { Tab, Stack, Drawer } from './views';

export const Navigator = Stack(routes);

// Your main App
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

//Return your data to your provider
export default connect(mapStateToProps)(App);
