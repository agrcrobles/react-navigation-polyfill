import React from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

const Home = ({ navigation }) => (
  <View style={styles.container} >

    <Text style={styles.text}>
      This is Home Page
    </Text>

    <Button title="Page 1" style={styles.button} onPress={() => navigation.navigate('Page', { index: 1 })} />

    <Button title="Page 2" style={styles.button} onPress={() => navigation.navigate('Page', { index: 2 })} />

  </View>
);

export default Home;

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
