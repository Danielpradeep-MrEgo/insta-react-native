/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './MainNav';
import { withAuthenticator } from 'aws-amplify-react-native'

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <MainNav />
      </NavigationContainer>
    </>
  );
};

export default withAuthenticator(App)