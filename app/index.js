import { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movie from '../components/movie.js';
import Button from '../components/button.js';
import { MovieContext } from '../components/MovieContext';

const t2Image = require('../assets/t2.jpg');
const titanicImage = require('../assets/titanic.jpg');

export default function App() {
    const { movie, setMovie } = useContext(MovieContext);
    const imageList = [t2Image, titanicImage];

     console.log(movie);
      return (
        <View style={styles.container}>
          <Movie movies={movie} image={imageList[movie.imageIndex]} />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
