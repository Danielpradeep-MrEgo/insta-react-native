import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ProfilePictureStyles'

const ProfilePicture = ({uri, size = 60}) => {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={{
          //   uri: 'https://i.pinimg.com/564x/87/12/ea/8712eaa221916ff0e3ebfb64a99e3f18.jpg',
          uri: uri,
        }}
      />
    </View>
  );
};

export default ProfilePicture;
