import React, { useState } from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { View, Text, Platform, StyleSheet } from 'react-native';
import TabBarAdvanceButton from './components/TabBarAdvanceButton';
import { Icon, ListMenu, Overlay } from 'components';
import Hello from 'screens/Hello';
import { MenuHorizontal, MenuList } from 'assets';
import TaskForm from 'components/taskForm/TaskForm';
import Dashboard from 'screens/dashboard/Dashboard.screen';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'store';
import { LIST_HOME_SCREEN } from './constants/list';

const BottomBar = createBottomTabNavigator();

function BottomTabNavigation() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showListMenu, setShowListMenu] = useState(false);
  const { theme } = useAppSelector((state: RootState) => state.theme);
  const barColor = theme.colors.backgroundSecondary;

  const toggleShowAddTask = () => {
    setShowAddTask(state => !state);
  };
  const toggleShowListMenu = () => {
    setShowListMenu(!showListMenu);
  };

  return (
    <>
      <BottomBar.Navigator
        initialRouteName={LIST_HOME_SCREEN}
        tabBar={props => (
          <View style={styles.navigatorContainer}>
            <BottomTabBar {...props} />
            {Platform.OS === 'ios' && (
              <View
                style={[
                  styles.xFillLine,
                  {
                    backgroundColor: barColor,
                  },
                ]}
              />
            )}
          </View>
        )}
        screenOptions={{
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: 'transparent',
            elevation: 30,
            height: Platform.OS === 'ios' ? 55 : undefined,
          },
          tabBarItemStyle: {
            backgroundColor: barColor,
          },
        }}>
        <BottomBar.Screen
          name="Profile"
          component={Hello}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon>
                <MenuList width={24} height={24} color={theme.colors.menu} />
              </Icon>
            ),
            tabBarLabel: () => <Text style={styles.labelStyle} />,
          }}
          listeners={() => ({
            tabPress: event => {
              event.preventDefault();
              toggleShowListMenu();
            },
          })}
        />
        <BottomBar.Screen
          name={LIST_HOME_SCREEN}
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarButton: props => (
              <TabBarAdvanceButton bgColor={barColor} {...props} />
            ),
          }}
          listeners={() => ({
            tabPress: event => {
              event.preventDefault();
              toggleShowAddTask();
            },
          })}
        />

        <BottomBar.Screen
          name="Menu"
          component={Hello}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Icon>
                <MenuHorizontal
                  width={24}
                  height={24}
                  color={theme.colors.menu}
                />
              </Icon>
            ),
            tabBarLabel: () => <Text style={styles.labelStyle} />,
          }}
          listeners={() => ({
            tabPress: event => {
              event.preventDefault();
              toggleShowAddTask();
            },
          })}
        />
      </BottomBar.Navigator>
      <Overlay isVisible={showAddTask} onClose={toggleShowAddTask}>
        <TaskForm onClose={toggleShowAddTask} />
      </Overlay>
      <Overlay isVisible={showListMenu} onClose={toggleShowListMenu}>
        <ListMenu onClose={toggleShowListMenu} />
      </Overlay>
    </>
  );
}
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    color: 'white',
    // marginBottom: Platform.OS === 'ios' ? 10 : undefined,
  },
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
    height: Platform.OS === 'ios' ? 35 : undefined,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BottomTabNavigation;
