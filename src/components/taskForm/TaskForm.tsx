import { Clock, Menu3, Star } from 'assets';
import InputField from 'components/inputField/InputField';
import { useAppSelector } from 'hooks/useAppSelector';
import { useInputChange } from 'hooks/useInputChange';
import { ITask } from 'interfaces/task.interface';
import React, { FC, useRef, useState } from 'react';
import DatePicker from 'react-native-date-picker';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
import { RootState } from 'store';
import { get12HoursTimeFromDateTime } from 'utills/helpers';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addTask } from 'screens/tasks/taskSlice';

interface IProps {
  onClose: () => void;
}
const TaskForm: FC<IProps> = ({ onClose }) => {
  const { theme } = useAppSelector((state: RootState) => state.theme);
  const [state, setState] = useInputChange<ITask>({
    title: '',
    details: '',
    date: '',
    time: '',
    isComplete: false,
    isStarred: false,
    list: '',
  });
  const [showDetais, setShowDetails] = useState(false);
  const [showDateTime, setShowDateTime] = useState(false);
  const [date, setDate] = useState(new Date());
  const { activeList } = useAppSelector((state: RootState) => state.list);
  const detaisRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();

  const handleShowDetails = () => {
    setShowDetails(true);
    if (detaisRef.current != null) detaisRef.current.focus();
  };
  const handleToggleStar = () => {
    setState('isStarred', !(state.isStarred ?? false) ?? false);
  };

  const handleSave = () => {
    const theTask: ITask = {
      ...state,
      list: activeList,
    };
    dispatch(addTask(theTask));
    onClose();
  };
  const handleToggleDateTime = () => {
    setShowDateTime(!showDateTime);
  };
  const onChange = (selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setDate(currentDate!);
    setState('date', currentDate?.toString());
    handleToggleDateTime();
  };
  const handleclearDate = () => {
    setState('date', '');
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.backgroundSecondary,
          padding: theme.spacing.m,
        },
      ]}>
      <InputField
        name="title"
        value={state.title}
        placeholder="New task"
        onChangeTextInput={setState}
        label=""
      />
      {showDetais && (
        <InputField
          name="details"
          value={state.details}
          placeholder="Add details"
          onChangeTextInput={setState}
          label=""
          ref={detaisRef}
        />
      )}
      {state.date !== '' && (
        <View style={styles.dateWrap}>
          <Text style={[theme.textVariants.body, { color: theme.colors.blue }]}>
            {' '}
            {new Date(state.date ?? '').toDateString()}{' '}
            {get12HoursTimeFromDateTime(state.date ?? '')}
          </Text>
          <TouchableOpacity onPress={handleclearDate}>
            <Text style={[theme.textVariants.body]}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      <DatePicker
        modal
        open={showDateTime}
        date={date}
        onConfirm={onChange}
        onCancel={handleToggleDateTime}
      />

      <View style={styles.row}>
        <View style={styles.actionRows}>
          <TouchableOpacity onPress={handleShowDetails}>
            <Menu3
              width={25}
              height={25}
              color={
                (state.details ?? '').length > 0
                  ? theme.colors.blue
                  : theme.colors.graySecondary
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToggleDateTime}>
            <Clock
              width={25}
              height={25}
              color={
                (state.date ?? '').length > 0
                  ? theme.colors.blue
                  : theme.colors.graySecondary
              }
            />
          </TouchableOpacity>
          <TouchableHighlight onPress={handleToggleStar}>
            <Star
              width={25}
              height={25}
              color={
                state.isStarred ?? false
                  ? theme.colors.blue
                  : theme.colors.graySecondary
              }
            />
          </TouchableHighlight>
        </View>
        <TouchableHighlight disabled={state.title === ''} onPress={handleSave}>
          <Text
            style={[
              theme.textVariants.body,
              {
                color:
                  state.title === ''
                    ? theme.colors.graySecondary
                    : theme.colors.blue,
              },
            ]}>
            Save
          </Text>
        </TouchableHighlight>
      </View>
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
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionRows: {
    flexDirection: 'row',
    gap: 30,
  },
  dateWrap: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'flex-start',
    textAlign: 'center',
    borderRadius: 10,
    padding: 10,
    borderWidth: 0.3,
  },
});
export default TaskForm;
