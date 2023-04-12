import InputField from 'components/inputField/InputField';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useInputChange } from 'hooks/useInputChange';
import { IList } from 'interfaces/list.interface';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { addList } from 'screens/dashboard/listSlice';
import { RootState } from 'store';

interface IProps {
  onClose: () => void;
}
const ListForm: FC<IProps> = ({ onClose }) => {
  const [state, setState] = useInputChange<IList>({
    title: '',
    id: '5',
  });
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state: RootState) => state);

  const handleCreate = () => {
    dispatch(addList(state));
    onClose();
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.theme.colors.backgroundSecondary,
          padding: theme.theme.spacing.m,
        },
      ]}>
      <View style={styles.row}>
        <View style={styles.wrap}>
          <Text style={[theme.theme.textVariants.body]} onPress={onClose}>
            X
          </Text>
          <Text style={[theme.theme.textVariants.header, { fontSize: 23 }]}>
            Create new list
          </Text>
        </View>

        <TouchableOpacity onPress={handleCreate} disabled={state.title === ''}>
          <Text
            style={[
              theme.theme.textVariants.body,
              {
                opacity: state.title === '' ? 0.5 : 1,
              },
            ]}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.innerContainer,
          { borderColor: theme.theme.colors.grayPrimary },
        ]}>
        <InputField
          name="title"
          value={state.title}
          placeholder="Enter list title"
          onChangeTextInput={setState}
          label=""
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '96%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row: {
    flexDirection: 'row',
    // gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  wrap: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  innerContainer: {
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    paddingVertical: 15,
  },
});
export default ListForm;
