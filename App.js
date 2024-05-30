import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movie from './components/movie.js';
import Button from './components/button.js';

import movies from './assets/movies.json';

const t2Image = require('./assets/t2.jpg');
const titanicImage = require('./assets/titanic.jpg');

export default function App() {
const [movieIndex, setMovieIndex] = useState(0);

const handleMoviePress = () => {
    setMovieIndex(1);
}

const imageList = [t2Image, titanicImage];

 console.log(movies);
  return (
    <View style={styles.container}>
      <Movie movies={movies} imageList={imageList} movieIndex={movieIndex} />
      <Button label={"press"} onPress={handleMoviePress} />
      <StatusBar style="auto" />
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
