
## Quick start

## Configure Redux yourself

Use your redux store out of the box. Invoke [addNavigationHelpers](https://reactnavigation.org/docs/guides/redux) and bind your state using `getStateForAction` exactly in the same way it is in documentation.

### Create your pages

Use react-native tags and syntax to create your scenes and pages.

```js
export const Page = ({ navigation }) => (
  <View>
    <Text>I am a page</Text>
    <Button
      title='Page'
      style={styles.button}
      onPress={() => navigation.navigate('Home')}
    />
  </View>
);
Page.navigationOptions = {
  title: () => 'Firulais'
};
```
