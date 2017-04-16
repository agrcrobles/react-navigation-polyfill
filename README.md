# Built in views in web

[![Demo on Heroku](https://img.shields.io/badge/demo-heroku-brightgreen.svg?style=flat-square)](https://react-navigation-playground.herokuapp.com/)
[![npm version][npm-image]][npm-url]

[npm-image]: https://badge.fury.io/js/react-navigation-polyfill.svg
[npm-url]: https://www.npmjs.com/package/react-navigation-polyfill

> DEPRECATED: This module is deprecated. For a thorough discussion, please read the following [blog post](https://medium.com/@locropulenton/navigating-in-all-platforms-with-react-navigation-673e9a6e963) about navigating in all platforms with react-navigation.

## Navigators views on web

Follow instructions below to make [StackNavigator](https://reactnavigation.org/docs/navigators/stack), [TabNavigator](https://reactnavigation.org/docs/navigators/tab) and [DrawerNavigator](https://reactnavigation.org/docs/navigators/drawer) work on web or try starter below.

## Starter

https://github.com/agrcrobles/react-native-web-boilerplate

## Instructions 

Install react-navigation

```
npm i --save react-navigation
```

Webpack configuration

```javascript
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../node_modules/react-native-tab-view')
       ]
    }
  },
  resolve: {
    alias: {
      'react-navigation': 'react-navigation/lib/react-navigation.js'
    }
  }
```

## About

This is meant somehow as a solution to follow discussions from 
[react-navigation](https://github.com/react-community/react-navigation/issues/622) and [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view/issues/159).

## License

MIT
