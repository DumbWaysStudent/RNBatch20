import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Posts from './src/screens/Posts';
import PostDetail from './src/screens/PostDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={Posts} options={{
          title: "POSTS"
        }} />
        <Stack.Screen name="PostDetail" component={PostDetail} options={{
          title: "Detail Post"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}