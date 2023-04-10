import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hello from '../screens/Hello';

export const Navigations = () => {
  const Stack = createNativeStackNavigator();
  const Navigator = Stack.Navigator;
  const Screen = Stack.Screen;

  return (
    <Navigator initialRouteName="Hello">
      <Screen name="Hello" component={Hello} />
    </Navigator>
  );
};

export default Navigations;
