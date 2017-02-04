import React from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

const Page = ({ navigation }) => (
  <View style={styles.container} >

    <Text style={styles.text}>
      Page {navigation.state.params.index}
    </Text>

    <Button title="Back" style={styles.button} onPress={() => navigation.goBack()} />

  </View>
);

export default Page;

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
