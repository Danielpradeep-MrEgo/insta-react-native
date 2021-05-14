import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DiscoveryScreen from './screens/DiscoveryScreen';
import PostScreen from './screens/PostScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Homeicons from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import ADicons from 'react-native-vector-icons/AntDesign';
import HomeScreen from './screens/HomeScreen';
import HomeNav from './HomeNav';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const HomeHeaderScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerLeft: () => (
//             <Feather
//               name="camera"
//               size={26}
//               color="black"
//               style={{marginLeft: 10}}
//               // headerLeftContainerStyle={}
//             />
//           ),

//           headerTitle: () => (
//             <Image
//               style={{height: 50, width: 100}}
//               source={{
//                 uri: 'https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png',
//               }}
//             />
//           ),

//           headerRight: () => (
//             <Ionicons
//               name="paper-plane-outline"
//               size={26}
//               color="black"
//               style={{marginRight: 10}}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const BottomNav = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              return <Homeicons name="home" size={24} color={color} />;
            }
            if (route.name === 'Discovery') {
              return <Feather name="search" size={24} color={color} />;
            }
            if (route.name === 'Post') {
              return (
                <Ionicons name="add-circle-outline" size={26} color={color} />
              );
            }
            if (route.name === 'Notifications') {
              return <ADicons name="hearto" size={24} color={color} />;
            }
            if (route.name === 'Profile') {
              return <Ionicons name="person-outline" size={24} color={color} />;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeNav} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};

export default BottomNav;
