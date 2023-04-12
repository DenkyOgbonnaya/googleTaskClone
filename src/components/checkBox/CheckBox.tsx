import { CheckMark } from 'assets';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RootState } from 'store';

interface IProps {
  value: boolean;
  onCheck: (value: boolean) => void;
}
const CheckBox: FC<IProps> = ({ value, onCheck }) => {
  const { theme } = useAppSelector((state: RootState) => state.theme);

  const handleCheck = () => {
    onCheck(!value);
  };
  return (
    <TouchableOpacity
      onPress={handleCheck}
      style={[
        styles.container,
        { borderColor: theme.colors.graySecondary, borderWidth: value ? 0 : 1 },
      ]}>
      {value && <CheckMark width={25} height={25} color={theme.colors.gold} />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 30 / 2,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CheckBox;
