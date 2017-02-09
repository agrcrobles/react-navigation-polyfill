import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

//export navigator in order to get state for action in redux
import { StackNavigator } from '../';

// home page
const Main = class Main extends Component {
  static navigationOptions = {
    title: () => 'Home',
    titleStyle: {
      backgroundColor: 'red'
    },
    tintColor: 'green'
  }
  render() {
    return (
      <View style={styles.flex} >

        <Text style={styles.text}>
          This is some main text for stack navigation
        </Text>

        <Button title='Page' style={styles.flex} onPress={() => this.props.navigation.navigate('Page')} />
      </View>
    );
  };
}

// any other page
const Page = ({ navigation }) => (
  <View style={styles.flex} >

    <Text style={styles.text}>
      Page content here!
    </Text>

    <Button title='Back' style={styles.flex} onPress={() => navigation.goBack()} />

  </View>
);
Page.navigationOptions = {
  title: () => 'Crazy page'
};
// some styles
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  text: {
    padding: 20,
    alignSelf: 'center'
  }
});

// routes
export const Routes = {
  Main: {
    screen: Main
  },
  Page: {
    screen: Page
  }
};

export const Navigator = StackNavigator(Routes,{
  initialRouteName: 'Main',
  initialRouteParams: {},
  headerMode: 'screen', //'none'
});
