import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Feed from '../components/Feed';

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView>
        <Feed />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
