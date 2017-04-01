# Built in views in web

- It is a polyfill for react-navigation to make web be like native when it comes to navigations.

> It could be unnecesary and deprecated in the near future when in `react-navigation` bring support to built in views for web.

## Motivation

It brings all behaviors from the [built-in](https://reactnavigation.org/docs/navigators/) views of [react-navigation](https://reactnavigation.org) from the native to the web.

## Demo

Try navigation playground [on web](https://react-navigation-playground.herokuapp.com/).

## Quick start

 - Install dependency

```
npm i --save react-navigation react-navigation-polyfill
```

 - Resolve alias in webpack

 - Navigate!

## Navigators

### DrawerNavigator

 [DrawerNavigator](https://reactnavigation.org/docs/navigators/drawer) can't be used on web, instead this polyfill is wrapping the native one.

### TabNavigator

 [TabNavigator](https://reactnavigation.org/docs/navigators/tab) can't be used on web, instead this polyfill is wrapping the native one.

### StackNavigator

[StackNavigator](https://reactnavigation.org/docs/navigators/stack) can't be used on web, instead this polyfill is wrapping the native one.

## More info

#### Create React App

> [Supported](https://github.com/react-community/react-navigation/issues/622)

#### Starter

 Use [react-native-web-boilerplate](https://github.com/agrcrobles/react-native-web-boilerplate) as a simple starter

#### Flow annotation

> Use flow anotation from react-navigation

## About

This module is meant somehow as a solution to follow discussions from 
[react-navigation](https://github.com/react-native-community/react-native-tab-view/issues/159) and [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view/issues/159) and because so far it is the way to make native navigators work on web.

## CONTRIBUTING

PR, stars ✭ and issue reporting, welcome.

## License

MIT
