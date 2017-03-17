// // usage:
// // import foo from 'some-module'
// declare module 'some-module' {
//   declare type Foo = {/*...*/}
//   declare export default Foo
// }

// // usage: 
// // import myFunc from 'some-module'
// declare module 'some-module' {
//   declare export default () => void 
// }

// // usage: 
// // import { foo } from 'some-module'
// declare module 'some-module' {
//   declare type Foo = {/*...*/}
//   declare export var foo: FooType 
// }

// // usage: 
// // import Foo from 'some-module'
// declare module 'some-module' {
//   declare class Foo {}
//   declare export default typeof Foo
// }
declare module createNavigationContainerProps {
  // declare var something;
}
declare module StateUtilsProps {
  // declare var something;
}
declare module PropTypesProps {
  // declare var something;
}
declare module addNavigationHelpersProps {
  declare var exports dispatch: any,
  declare var exports state: any,
}
declare module NavigationActionsProps {
  // declare var something;
}
declare module createNavigatorProps {
  // declare var something;
}
declare module RouteConfig = {
  declare export var screen: Object
  declare export var path: string
}
declare module StackNavigatorRoutes {
  declare var exports: { [key: string]: RouteConfig };
}
declare module StackNavigatorConfig {
  // declare var something;
}
declare module TabNavigatorRoutes {
  declare var exports: { [key: string]: RouteConfig };
}
declare module TabNavigatorConfig {
  // declare var something;
}
declare module DrawerNavigatorRoutes {
  declare var exports: { [key: string]: RouteConfig };
}
declare module DrawerNavigatorConfig {
  // declare var something;
}
declare module StackRouterProps {
  // declare var something;
}
declare module TabRouterProps {
  // declare var something;
}
declare module TransitionerProps {
  // declare var something;
}
declare module CardStackProps {
  // declare var something;
}
declare module DrawerViewProps {
  // declare var something;
}
declare module TabViewProps {
  // declare var something;
}
declare module withNavigationProps {
  // declare var something;
}

declare module createNavigationContainerType {
  // declare var something: any
}
declare module StateUtilsType {
  // declare var something: any
}
declare module PropTypesType {
  // declare var something: any
}
declare module addNavigationHelpersType {
  // returns navigator
}
declare module NavigationActionsType {
  // declare var something: any
}
declare module createNavigatorType {
  // declare var something: any
}
declare module StackNavigatorType {
  // declare var something: any
}
declare module TabNavigatorType {
  // declare var something: any
}
declare module DrawerNavigatorType {
  // declare var something: any
}
declare module StackRouterType {
  // declare var something: any
}
declare module TabRouterType {
  // declare var something: any
}
declare module TransitionerType {
  // declare var something: any
}
declare module CardStackType {
  // declare var something: any
}
declare module DrawerViewType {
  // declare var something: any
}
declare module TabViewType {
  // declare var something: any
}
declare module withNavigationType {
  // declare var something: any
}

declare module ReactNavigation {
  declare var exports: {
    createNavigationContainer: (props: createNavigationContainerProps) => createNavigationContainerType
    StateUtils: (props: StateUtilsProps) => StateUtilsType
    PropTypes: (props: PropTypesProps) => PropTypesType
    addNavigationHelpers: (props: addNavigationHelpersProps) => addNavigationHelpersType
    NavigationActions: (props: NavigationActionsProps) => NavigationActionsType
    createNavigator: (props: createNavigatorProps) => createNavigatorType
    StackNavigator: (routes: StackNavigatorRoutes, config:  StackNavigatorConfig) => StackNavigatorType
    TabNavigator: (routes: TabNavigatorRoutes, config:  TabNavigatorConfig) => TabNavigatorType
    DrawerNavigator: (routes: DrawerNavigatorRoutes, config:  DrawerNavigatorConfig) => DrawerNavigatorType
    StackRouter: (props: StackRouterProps) => StackRouterType
    TabRouter: (props: TabRouterProps) => TabRouterType
    Transitioner: (props: TransitionerProps) => TransitionerType
    CardStack: (props: CardStackProps) => CardStackType
    DrawerView: (props: DrawerViewProps) => DrawerViewType
    TabView: (props: TabViewProps) => TabViewType
    withNavigation: (props: withNavigationProps) => withNavigationType
  }
}
declare module Image {
  declare var exports: {};
}
