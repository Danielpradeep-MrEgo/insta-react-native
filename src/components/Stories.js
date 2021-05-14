import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Story from './Story';
import StoriesData from './data';
import {API, graphqlOperation} from 'aws-amplify';
import {listStorys} from '.././graphql/queries';

const Stories = () => {
  const [stories, setStories] = useState([])

  const fetchStories = async () => {
    try {
      const storyData = await API.graphql(graphqlOperation(listStorys));
      setStories(storyData.data.listStorys.items);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <FlatList
      data={stories}
      keyExtractor={({id}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      styles={styles.container}
      renderItem={({item}) => <Story story={item} />}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
