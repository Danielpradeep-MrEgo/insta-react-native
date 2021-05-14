import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Fontisto';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({likes, caption, postedAt}) => {
  const [isLikes, setIsLikes] = useState(false);
  const [likeCount, setLikesCount] = useState(0);
  const onLikesPress = () => {
    const amount = isLikes ? likes -1  : likes + 1;
    setLikesCount(likes + amount);
    setIsLikes(!isLikes);
  };

  useEffect(() => {
    setLikesCount(likes);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.right}>
        <View style={styles.left}>
          <TouchableWithoutFeedback onPress={onLikesPress}>
            {!isLikes ? (
              <ADIcon name="heart" size={25} color="#B95C50" />
            ) : (
              <ADIcon name="hearto" size={25} color="#545454" />
            )}
          </TouchableWithoutFeedback>
          <FIcon name="comment" size={23} color="#545454" />
          <IonIcon name="paper-plane-outline" size={26} color="#545454" />
        </View>
        <FAIcon name="bookmark-o" size={25} color="#545454" />
      </View>
      <Text style={styles.likes}>{likes} likes</Text>
      <Text style={styles.caption}>danny: {caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
    margin: 3,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 130,
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 3,
  },
  caption: {
    fontWeight: '500',
    margin: 3,
  },
  postedAt: {
    fontWeight: '500',
    margin: 3,
    color: '#BcBcBc',
  },
});
