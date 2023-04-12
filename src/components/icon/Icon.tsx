import React, { FC } from 'react';
import { View } from 'react-native';

interface IProps {
  children: React.ReactNode;
}
const Icon: FC<IProps> = ({ children }) => {
  return (
    <View
      style={{ overflow: 'hidden' }}
      pointerEvents="none"
      onStartShouldSetResponder={event => true}
      onTouchEnd={e => {
        e.stopPropagation();
      }}>
      {children}
    </View>
  );
};

export default Icon;
