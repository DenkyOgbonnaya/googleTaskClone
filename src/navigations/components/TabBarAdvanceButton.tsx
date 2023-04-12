import React, { FC } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { TabBg } from './Svg';
import { Plus } from 'assets';
import { Icon } from 'components';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'store';

interface IProps extends TouchableOpacityProps {
  bgColor: string;
}
const TabBarAdvancedButton: FC<IProps> = ({ bgColor, ...props }) => {
  const { theme } = useAppSelector((state: RootState) => state.theme);
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TabBg color={bgColor} style={styles.background} />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: bgColor }]}
        onPress={props.onPress}>
        <Icon>
          <Plus color={theme.colors.menu} width={35} height={40} />
        </Icon>
      </TouchableOpacity>
      {Platform.OS === 'ios' ? (
        <View style={{ backgroundColor: bgColor, height: 50, width: '100%' }} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
  },
});

export default TabBarAdvancedButton;
