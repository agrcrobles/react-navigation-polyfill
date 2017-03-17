# Built in views for web

> react-navigation for web version 1.0.0-beta.8 could be unnecesary and deprecated in the near future.

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

 - Since it is experimental won't been published to npm.

## Navigators

### DrawerNavigator

 [DrawerNavigator](https://reactnavigation.org/docs/navigators/drawer) can't be used on web, instead a built in view for web is wrapping the native one.

### TabNavigator

 [TabNavigator](https://reactnavigation.org/docs/navigators/tab) can't be used on web, instead a built in view for web is wrapping the native one.

### StackNavigator

[StackNavigator](https://reactnavigation.org/docs/navigators/stack) can't be used on web, instead a built in view for web is wrapping the native one.

## More info

#### Create React App

> [Supported](https://github.com/react-community/react-navigation/issues/622)

#### Working example

 - react + redux hot reloaded

#### Flow

> Working example with some built in flow modules.

## About

This module is meant somehow as a solution following the [discussion](https://github.com/react-community/react-navigation/issues/174) in react-navigation and because so far it is way to make it work.

## License

MIT
