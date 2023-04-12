import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LIST_DASHBOARD_SCREEN } from './constants/list';
import BottomTabNavigation from './BottomTab';

export const Navigations = () => {
  const Stack = createNativeStackNavigator();
  const Navigator = Stack.Navigator;
  const Screen = Stack.Screen;

  return (
    <Navigator initialRouteName={LIST_DASHBOARD_SCREEN}>
      <Screen
        name={LIST_DASHBOARD_SCREEN}
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default Navigations;
