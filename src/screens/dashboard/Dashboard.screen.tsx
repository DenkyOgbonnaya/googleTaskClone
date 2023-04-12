// import TaskList from 'components/taskList/TaskList';
import { useAppSelector } from 'hooks/useAppSelector';
// import { ITask } from 'interfaces/task.interface';
import * as React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import {
  TabView,
  TabBar,
  SceneRendererProps,
  Route,
} from 'react-native-tab-view';
import { RootState } from 'store';
import ListTask from './components/listTask/ListTask';
import { Overlay, TitleBar } from 'components';
import ListForm from 'components/listForm/ListForm';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setActiveList } from './listSlice';
import StarredTask from 'components/starredTasks/StarredTasks';

const Dashboard = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [showAddList, setShowAddList] = React.useState(false);
  const { theme } = useAppSelector((state: RootState) => state.theme);
  const { lists } = useAppSelector((state: RootState) => state.list);
  const dispatch = useAppDispatch();

  const dynamicLists = lists.map(list => ({
    key: list.title,
    title: list.title,
  }));
  const routes = [
    { key: 'star', title: '☆' },
    ...dynamicLists,
    { key: 'new', title: '＋New List' },
  ];

  const toggleAddList = () => {
    setShowAddList(!showAddList);
  };

  const renderScene = ({ route }: SceneRendererProps & { route: Route }) => {
    for (const list of lists) {
      if (route.key === 'star') {
        return <StarredTask />;
      }
      if (list.title === route.key) {
        return <ListTask listTitle={list.title} />;
      }
    }
  };

  const handleTabPress = (index: number) => {
    setIndex(index);
    dispatch(setActiveList(routes[index].title));
    if (lists.length + 2 - 1 === index) {
      toggleAddList();
    }
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          paddingHorizontal: theme.spacing.m,
        },
      ]}>
      <TitleBar title="Tasks" userName="Dennis" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={handleTabPress}
        initialLayout={{ width: layout.width }}
        swipeEnabled={false}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: theme.colors.blue }}
            style={{
              backgroundColor: theme.colors.background,
              elevation: 0,
              //   width: '50%',
              marginBottom: 20,
            }}
            labelStyle={{ marginLeft: 0, paddingLeft: 0 }}
            renderLabel={({ route, focused, color }) => (
              <Text
                style={{
                  color: focused ? theme.colors.blue : color,
                  fontSize: 16,
                }}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
      <Overlay isVisible={showAddList} onClose={toggleAddList}>
        <ListForm onClose={toggleAddList} />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;
