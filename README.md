# Built in views for web

> react-navigation wrapper for web version 1.0.0-beta.7 could be unnecesary and deprecated.

## Overview

It brings all behaviors from the [built-in](https://reactnavigation.org/docs/navigators/) views of [react-navigation](https://reactnavigation.org) from the native to the web.

## Demo

Try navigation playground [on web](https://react-navigation-playground.herokuapp.com/).

## Quick start

 - Install dependency

```
npm i --save https://github.com/agrcrobles/react-navigation-web.git
```

 - Resolve alias in webpack config as it is in the [example](https://github.com/agrcrobles/react-navigation-web/blob/master/examples/webpack.config.js)

 - Navigate!

#### Known issues

 - Since it is experimental hasn't been published to npm yet.

## Navigators

### DrawerNavigator

 [DrawerNavigator](https://reactnavigation.org/docs/navigators/drawer) can't be used on web, instead a built in view for web is wrapping the native one.

### TabNavigator

 [TabNavigator](https://reactnavigation.org/docs/navigators/tab) can't be used on web, instead a built in view for web is wrapping the native one.

### StackNavigator

[StackNavigator](https://reactnavigation.org/docs/navigators/stack) can't be used on web, instead a built in view for web is wrapping the native one.

## More info

#### Transitioner

> Supported

#### Nested navigators

> Supported

#### withNavigation

> Supported

#### Flow

> Building without syntax.

#### Create React App

> [Supported](https://github.com/react-community/react-navigation/issues/622)

## About

This module is meant somehow as a solution following the [discussion](https://github.com/react-community/react-navigation/issues/174) in react-navigation.

## License

MIT
