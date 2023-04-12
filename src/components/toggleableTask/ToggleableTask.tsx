import { ChevronDown, ChevronUp } from 'assets';
import TaskList from 'components/taskList/TaskList';
import { useAppSelector } from 'hooks/useAppSelector';
import { ITask } from 'interfaces/task.interface';
import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { RootState } from 'store';

interface IProps {
  title: string;
  tasks: ITask[];
}
const ToggleableTask: FC<IProps> = ({ title, tasks }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useAppSelector((state: RootState) => state.theme);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleVisibility}>
        <View style={[styles.row, { marginBottom: theme.spacing.m }]}>
          <Text style={[theme.textVariants.header]}>
            {title} ({tasks.length})
          </Text>
          <View>
            {isVisible ? (
              <ChevronUp
                width={25}
                height={25}
                color={theme.colors.graySecondary}
              />
            ) : (
              <ChevronDown
                height={25}
                width={25}
                color={theme.colors.graySecondary}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {isVisible && <TaskList tasks={tasks} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ToggleableTask;
