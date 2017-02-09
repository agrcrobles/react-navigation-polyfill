import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text,
  Image
} from 'react-native';

//export navigator in order to get state for action in redux
import { DrawerNavigator } from '../';

const Main = class Main extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Drawer',
      icon: (props) => <Text>Hello</Text>
    })
  }
  render() {
    return (
      <View style={styles.flex} >
        <Text style={styles.text}>
            This is some main text for drawer navigation
        </Text>

        <Button title='Page' style={styles.flex} onPress={() => this.props.navigation.navigate('Page')} />
      </View>
    );
  };
}

// home page
const Page = class Page extends Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Page'
    })
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.flex} >
        <Text style={styles.text}>
          Page content here!
        </Text>
      <Button title='Back' style={styles.flex} onPress={() => navigation.goBack()} />
      </View>
    );
  }
};


// some styles
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  text: {
    padding: 20,
    alignSelf: 'center'
  },
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

export const Navigator = DrawerNavigator(Routes, {
  initialRouteName: 'Main',
  initialRouteParams: {}
});
