import { useAppSelector } from 'hooks/useAppSelector';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootState } from 'store';
import { getHashedColor } from 'utills/getHashedColors';

interface IProps {
  title: string;
  userName: string;
}
const TitleBar: FC<IProps> = ({ title, userName }) => {
  const { theme } = useAppSelector((state: RootState) => state.theme);
  const bgColor = getHashedColor(userName);
  const userInitial = userName[0].toUpperCase();

  return (
    <View style={styles.container}>
      <Text style={[theme.textVariants.header, { fontSize: 22 }]}>Tasks</Text>
      <TouchableOpacity style={[styles.profile, { backgroundColor: bgColor }]}>
        <Text style={[theme.textVariants.header]}>{userInitial}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    position: 'relative',
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default TitleBar;
