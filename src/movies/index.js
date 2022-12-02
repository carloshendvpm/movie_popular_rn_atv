import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Film from '../film';


export default function Movies() {

 const [movies, setMovies] = useState([]) 
 const img_path = 'https://image.tmdb.org/t/p/w500'
 
 useEffect(() => {
   
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7e3ee431674b7eba9c9bddf93bc9f1db&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
 }, [])

 return (
   <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Popular Movies - 2022</Text>
      <FlatList
         data={movies}
         keyExtractor={item => `${item.id}`}
         renderItem={({item}) => {
            return(
               <Film
               title={item.title}
               path={`${img_path}${item.poster_path}`}
               />
            )
         }}
      />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'black'
   },
   containerFilms: {
      backgroundColor: 'orange',
      height: 60
   },
   header: {
      color: 'white',
      alignSelf:'center',
      fontWeight: 'bold',
      fontSize: 26,
      textAlign: 'center',
      paddingVertical: 20
   }
})