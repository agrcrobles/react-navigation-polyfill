# Built in views in web

![Build Status](https://api.travis-ci.org/agrcrobles/react-native-web-webpack-starter.svg?master)
[![Demo on Heroku](https://img.shields.io/badge/demo-heroku-brightgreen.svg?style=flat-square)](https://react-navigation-playground.herokuapp.com/)
[![npm version][npm-image]][npm-url]

[npm-image]: https://badge.fury.io/js/react-navigation-polyfill.svg
[npm-url]: https://www.npmjs.com/package/react-navigation-polyfill

- This is a polyfill for react-navigation to make navigators work on web.

> It could be unnecesary and deprecated in the near future when in `react-navigation` bring support to built in views for web.

## Motivation

It brings all behaviors from the [built-in](https://reactnavigation.org/docs/navigators/) views of [react-navigation](https://reactnavigation.org) from the native to the web.

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
Navigate!

## Navigators

### DrawerNavigator

 [DrawerNavigator](https://reactnavigation.org/docs/navigators/drawer) can't be used on web, instead this polyfill is wrapping the native one.

### TabNavigator

 [TabNavigator](https://reactnavigation.org/docs/navigators/tab) can't be used on web, instead this polyfill is wrapping the native one.

### StackNavigator

[StackNavigator](https://reactnavigation.org/docs/navigators/stack) can't be used on web, instead this polyfill is wrapping the native one.

## More info

### Create React App

> [Supported](https://github.com/react-community/react-navigation/issues/622)

## About

This module is meant somehow as a solution to follow discussions from 
[react-navigation](https://github.com/react-native-community/react-native-tab-view/issues/159) and [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view/issues/159) and because so far it is the way to make native navigators work on web.

## License

MIT
