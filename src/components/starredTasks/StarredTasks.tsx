import { useAppSelector } from 'hooks/useAppSelector';
import Task from '../task/Task';
import { ITask } from 'interfaces/task.interface';
import React, { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { RootState } from 'store';
import ListStatus from 'components/listStatus/ListStatus';

const StarredTask: FC = () => {
  const { tasks } = useAppSelector((state: RootState) => state.tasks);
  const listTasks: ITask[] = tasks.filter(task => task.isStarred);

  if (listTasks.length < 1)
    return (
      <View style={styles.container}>
        <ListStatus
          title="No starred tasks yet"
          subTitle="Add your to-dos and keep track of them across Google Workspace"
          status="empty"
        />
      </View>
    );
  return (
    <FlatList
      data={listTasks}
      renderItem={({ item }) => <Task task={item} />}
      keyExtractor={item => item.title}
      showsVerticalScrollIndicator={false}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default StarredTask;
