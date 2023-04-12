import { ListStatus, ToggleableTask } from 'components';
import TaskList from 'components/taskList/TaskList';
import { ITask } from 'interfaces/task.interface';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface IProps {
  listTitle: string;
}
const ListTask: FC<IProps> = ({ listTitle }) => {
  const listTasks: ITask[] = [
    {
      title: 'Testx task',
      details: 'Hello this is my first task',
      date: 'Tommorrow',
      time: '4pm',
      isStarred: true,
      isComplete: true,
    },
    {
      title: 'Testx task2',
      details: 'Hello this is my first task',
      date: 'Tommorrow',
      time: '4pm',
      isStarred: false,
      isComplete: false,
    },
  ];
  const isCompleted = false;

  if (isCompleted)
    return (
      <View style={styles.container}>
        <ListStatus
          title="All task completed"
          subTitle="Nice work!"
          status="complete"
        />
      </View>
    );
  if (listTasks.length < 1)
    return (
      <View style={styles.container}>
        <ListStatus
          title="No tasks yet"
          subTitle="Add your to-dos and keep track of them across Google Workspace"
          status="empty"
        />
      </View>
    );
  return (
    <View style={styles.listContainer}>
      <TaskList tasks={listTasks} />
      <ToggleableTask title="Completed" tasks={listTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
  },
});
export default ListTask;
