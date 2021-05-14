import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfilePicture from './ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Icon name="dots-three-vertical" size={17} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 8,
  },
  containerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    color: '#444444',
  },
});
