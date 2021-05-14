import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.image} name={post.user.name} />
      <Body imageUri={post.image} />
      <Footer
        likes={post.likes}
        caption={post.caption}
        postedAt={post.createdAt}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
