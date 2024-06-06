import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movie from '../components/movie.js';
import Button from '../components/button.js';
import movies from '../assets/movies.json';

const t2Image = require('../assets/t2.jpg');
const titanicImage = require('../assets/titanic.jpg');

export default function App() {
    const imageList = [t2Image, titanicImage];

     console.log(movies);
      return (
        <View style={styles.container}>
          <Movie movies={movies} image={imageList[movies.imageIndex]} />
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
