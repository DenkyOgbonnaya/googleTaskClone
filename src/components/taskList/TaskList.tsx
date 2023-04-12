import Task from '../task/Task';
import { ITask } from 'interfaces/task.interface';
import React, { FC } from 'react';
import { FlatList } from 'react-native';

interface IProps {
  tasks: ITask[];
}
const TaskList: FC<IProps> = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task task={item} />}
      keyExtractor={item => item.title}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TaskList;
