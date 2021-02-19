import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const CustomHeader = (props) => {
  return (
    <Header
      placement="center"
      centerComponent={{ text: props.title, style: { color: '#fff' } }}
    />
  )
}

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 40,
    borderBottomWidth: 1
  },
  title: {
    fontSize: 16,
    color: 'grey'
  }
})