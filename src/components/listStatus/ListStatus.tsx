import { EmptyFolder, FolderCheck } from 'assets';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootState } from 'store';

interface IProps {
  title: string;
  subTitle: string;
  status: 'complete' | 'empty';
}
const ListStatus: FC<IProps> = ({ title, subTitle, status }) => {
  const { theme } = useAppSelector((state: RootState) => state.theme);
  return (
    <View style={styles.container}>
      {status === 'complete' ? (
        <FolderCheck width={120} height={120} color={theme.colors.gold} />
      ) : (
        <EmptyFolder width={120} height={120} color={theme.colors.gold} />
      )}

      <Text style={[theme.textVariants.header, { marginTop: theme.spacing.m }]}>
        {title}
      </Text>
      <Text
        style={[
          theme.textVariants.body,
          { marginTop: theme.spacing.m, textAlign: 'center' },
        ]}>
        {subTitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '70%',
  },
});
export default ListStatus;
