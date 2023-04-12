import { CheckMark, Plus, Star } from 'assets';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { FC } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootState } from 'store';

interface IProps {
  onClose: () => void;
}
const ListMenu: FC<IProps> = ({ onClose }) => {
  const { theme, list } = useAppSelector((state: RootState) => state);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.theme.colors.backgroundSecondary,
          padding: theme.theme.spacing.m,
        },
      ]}>
      <TouchableOpacity>
        <View style={styles.row}>
          <Star width={25} height={25} color={theme.theme.colors.gold} />
          <Text style={theme.theme.textVariants.body}>Starred</Text>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.innerContainer,
          {
            paddingVertical: theme.theme.spacing.m,
            borderColor: theme.theme.colors.grayPrimary,
          },
        ]}>
        <FlatList
          data={list.lists}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.row}>
                <CheckMark
                  width={25}
                  height={25}
                  color={theme.theme.colors.grayPrimary}
                />
                <Text style={theme.theme.textVariants.body}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.row}>
          <Plus width={25} height={25} color={theme.theme.colors.grayPrimary} />
          <Text style={theme.theme.textVariants.body}>Create new list</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '60%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
  },
});

export default ListMenu;
