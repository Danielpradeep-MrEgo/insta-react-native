import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import ProfilePicture from './ProfilePicture';
import {useNavigation} from '@react-navigation/native';

const Story = props => {
  const {
    story: {
      user: {id, image, name},
    },
  } = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: id});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={image} onPress={onPress} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {},
  name: {
    textAlign: 'center',
  },
});
