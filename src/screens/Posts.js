import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import axios from 'axios';

const Posts = (props) => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = () => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res.data);
      setPosts(res.data);
      setIsLoading(false);
    })
    .catch(() => {
      alert("Error Fetch Data");
      setIsLoading(false);
    })
  }
  
  const _renderItem = ({item}) => {

    return (
      <ListItem onPress={() => props.navigation.navigate('PostDetail', item)} key={item.id.toString()} bottomDivider>
        <Avatar rounded title={item.title.slice(0, 2)} containerStyle={{backgroundColor: 'black'}} />
        <ListItem.Content>
          <ListItem.Title h4 numberOfLines={1}>{item.title}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>{item.body}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <FlatList
          data={posts}
          renderItem={_renderItem}
          keyExtractor={item => item.id.toString()}
          refreshing={isLoading}
          onRefresh={getPosts}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },  
  title: {
    fontSize: 100,
    fontWeight: 'bold'
  },
  top: {
    flex: 5
  },
  bottom: {
    flex: 1
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  titleItem: {
    fontWeight: 'bold'
  }
});