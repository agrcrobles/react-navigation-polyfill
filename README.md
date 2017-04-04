# Built in views in web

![Build Status](https://api.travis-ci.org/agrcrobles/react-native-web-webpack-starter.svg?master)
[![Demo on Heroku](https://img.shields.io/badge/demo-heroku-brightgreen.svg?style=flat-square)](https://react-navigation-playground.herokuapp.com/)
[![npm version][npm-image]][npm-url]

[npm-image]: https://badge.fury.io/js/react-navigation-polyfill.svg
[npm-url]: https://www.npmjs.com/package/react-navigation-polyfill

This is a polyfill to make [StackNavigator](https://reactnavigation.org/docs/navigators/stack), [TabNavigator](https://reactnavigation.org/docs/navigators/tab) and [DrawerNavigator](https://reactnavigation.org/docs/navigators/drawer) from react-navigation work on web.

> It could be unnecesary and deprecated in the near future when react-navigation bring support to [built-in views](https://reactnavigation.org/docs/navigators/) for web out of the box.

## Motivation

For a thorough discussion, please read the following [blog post](https://medium.com/@locropulenton/navigating-in-all-platforms-with-react-navigation-673e9a6e963) about it.

## Starter

https://github.com/agrcrobles/react-native-web-boilerplate

## Quick start

```
npm i --save react-navigation react-navigation-polyfill
```

Resolve alias in webpack

```javascript
{
  // other webpack config
  resolve: {
    alias: {
      'react-navigation': 'react-navigation-polyfill'
    }
  }
```

## More info

### Create React App

> [Supported](https://github.com/react-community/react-navigation/issues/622)

## About

This module is meant somehow as a solution to follow discussions from 
[react-navigation](https://github.com/react-native-community/react-native-tab-view/issues/159) and [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view/issues/159) and because so far it is the way to make native navigators work on web.

## License

MIT
