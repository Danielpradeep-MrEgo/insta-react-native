import React from 'react';
import {StyleSheet, Dimensions, Text, View, Image} from 'react-native';

const Body = ({imageUri}) => {
  return (
    <View>
      <Image source={{uri: imageUri}} style={styles.image} />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  image: {
    // width: '100%',
    // height: 500,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});
