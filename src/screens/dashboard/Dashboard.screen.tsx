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
import Hello from 'screens/Hello';
import { RootState } from 'store';
import ListTask from './components/listTask/ListTask';
import { TitleBar } from 'components';

const Dashboard = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const { theme } = useAppSelector((state: RootState) => state.theme);

  const [routes] = React.useState([
    { key: 'starred', title: 'Star' },
    { key: 'myList', title: 'My List' },
  ]);

  const renderScene = ({ route }: SceneRendererProps & { route: Route }) => {
    switch (route.key) {
      case 'starred':
        return <Hello />;
      case 'myList':
        return <ListTask listTitle="hELLO" />;
      default:
        return null;
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
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        swipeEnabled={false}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: theme.colors.blue }}
            style={{
              backgroundColor: theme.colors.background,
              elevation: 0,
              width: '50%',
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;
