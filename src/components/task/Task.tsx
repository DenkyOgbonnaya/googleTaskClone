import { ITask } from 'interfaces/task.interface';
import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from '../checkBox/CheckBox';
import { theme } from 'styles/theme';
import { Star } from 'assets';

interface IProps {
  task: ITask;
}
const Task: FC<IProps> = ({ task }) => {
  const handleCheck = (value: boolean) => {};
  return (
    <View style={styles.taskWrapper}>
      <View style={styles.container}>
        <CheckBox value={task.isComplete ?? false} onCheck={handleCheck} />
        <View style={styles.innerContainer}>
          <View>
            <Text
              style={[
                theme.textVariants.header,
                {
                  marginBottom: 5,
                  textDecorationLine:
                    task.isComplete ?? false ? 'line-through' : 'none',
                },
              ]}>
              {task.title}
            </Text>
            <Text style={[theme.textVariants.body]}>{task.details}</Text>
          </View>
          <Star
            width={25}
            height={25}
            color={
              task.isStarred ?? false
                ? theme.colors.gold
                : theme.colors.graySecondary
            }
            style={{
              display: task.isComplete ?? false ? 'none' : 'flex',
            }}
          />
        </View>
      </View>
      <View
        style={[
          styles.dateWrap,
          {
            marginTop: theme.spacing.s,
            borderColor: theme.colors.graySecondary,
            display: task.isComplete ?? false ? 'none' : 'flex',
          },
        ]}>
        <Text style={[theme.textVariants.body, { color: theme.colors.blue }]}>
          {task.date} {task.time}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    marginBottom: 30,
  },
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%',
  },
  dateWrap: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'flex-start',
    marginLeft: 32,
    marginTop: 5,
  },
});
export default Task;
