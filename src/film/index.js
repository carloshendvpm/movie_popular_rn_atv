import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';

export default function Film(props) {
 return (
   <SafeAreaView style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <Image style={styles.movieCover} source={{uri: props.path}}/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10
  },
  movieCover: {
    height: 150,
    width: 120,
    borderRadius: 5
  }
})