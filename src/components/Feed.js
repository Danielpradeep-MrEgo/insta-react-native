import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import Post from './Post';
import Stories from './Stories';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '.././graphql/queries';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (e) {
      console.log(e.message, 'error');
    }
  };

  // console.log(listPosts);
  console.log(API.graphql(graphqlOperation(listPosts)));

  return (
    <FlatList
      data={posts}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Stories}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};

export default Feed;
