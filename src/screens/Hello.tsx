import React from 'react';
import { Text, View } from 'react-native';
import { theme } from 'styles/theme';

const Hello = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={theme.textVariants.body}>This is a basic hello app</Text>
    </View>
  );
};

export default Hello;
