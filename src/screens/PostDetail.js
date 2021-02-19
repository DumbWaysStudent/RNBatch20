import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { RefreshControl } from 'react-native';

const PostDetail = (props) => {
  const title = props.route.params.title;
  const body = props.route.params.body;
  const id = props.route.params.id;

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    setIsLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => {
      setComments(res.data);
      setIsLoading(false);
    })
    .catch(() => {
      alert("Error Fetch Data");
      setIsLoading(false);
    })
  }

  const _renderItem = ({item}) => {
    return (
      <ListItem key={item.id.toString()} bottomDivider>
        <ListItem.Content>
          <ListItem.Title numberOfLines={1}>{item.email}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>{`${item.name} - ${item.body}`}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View style={styles.container}>
      <Text h4 >{title}</Text>
      <Text style={{marginTop: 20}}>{body}</Text>
      <Text style={{marginTop: 20, color: 'grey'}}>Comments</Text>
      <FlatList
        data={comments}
        renderItem={_renderItem}
        keyExtractor={item => item.id.toString()}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getComments} />}
      />
    </View>
  )
}

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1
  }
})
