import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeNav = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Instagram',
        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => <Feather name="camera" size={25} color={'#000'} />,
        headerTitle: () => (
          <Image
            source={{
              uri: 'https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png',
            }}
            resizeMode="contain"
            style={{width: 135, height: 50}}
          />
        ),
        headerRight: () => (
          <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeNav;
