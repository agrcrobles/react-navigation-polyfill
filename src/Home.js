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

    <Button title="Page" style={styles.button} onPress={() => navigation.navigate('Page')} />
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
