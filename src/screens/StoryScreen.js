import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import storiesData from '../components/data';
import ProfilePicture from '../components/ProfilePicture';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {API, graphqlOperation} from 'aws-amplify';
import {listStorys} from '.././graphql/queries';

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [stories, setStories] = useState([]);
  const [active, setActive] = useState();

  const userId = route.params.userId;
  // useEffect(() => {
  //   const userStories = storiesData.find(
  //     storyData => storyData.user.id === userId,
  //   );

  //   setUserStories(userStories);
  //   setActive(0);
  // }, []);

  useEffect(() => {
    fetchStories();
    setActive(0);
  }, []);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));
      setStories(storiesData.data.listStorys.items);
    } catch (e) {
      console.log('error fetching stories');
      console.log(e);
    }
  };

  // const naviagateToNextUser = () => {
  //   navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  // };

  // const naviagateToPrevUser = () => {
  //   navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  // };

  const handeleNext = () => {
    if (active >= stories.length - 1) {
      // naviagateToNextUser();
      return;
    }
    setActive(active + 1);
  };

  const handlePrev = () => {
    if (active <= 0) {
      // naviagateToPrevUser();
      return;
    }
    setActive(active - 1);
  };

  const handlePress = evt => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrev();
    } else {
      handeleNext();
    }
  };

  if (!stories || stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = stories[active];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground source={{uri: activeStory.image}} style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={activeStory.user.image} size={50} />
            <Text style={styles.userName}>{activeStory.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.createdAt}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#ffffff'} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={'white'}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={'#ffffff'}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  postedTime: {
    marginLeft: 10,
    fontWeight: '700',
    color: '#808080',
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
  messageButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: '100%',
    color: 'white',
    fontSize: 16,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    height: 50,
  },
});
