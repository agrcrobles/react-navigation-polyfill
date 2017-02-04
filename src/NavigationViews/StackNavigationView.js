import React from 'react';

import {
  addNavigationHelpers
} from 'react-navigation';

const StackNavigationView = ({ navigation, router }) => {
  const Component = router.getComponentForState(navigation.state);
  return (
    <Component
      navigation={addNavigationHelpers({
        ...navigation,
        state: navigation.state.routes[navigation.state.index]
      })}
    />
  );
};
export default StackNavigationView;
