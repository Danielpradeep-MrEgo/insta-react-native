import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StoryScreen from './screens/StoryScreen';
import BottomNav from "../src/BottomNav"
const RootStack = createStackNavigator();

const MainNav = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Home"
      component={BottomNav}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name="Story"
      component={StoryScreen}
      options={{
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default MainNav;
