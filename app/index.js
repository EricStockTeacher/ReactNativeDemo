import { useContext, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movie from '../components/movie.js';
import Button from '../components/button.js';
import { MovieContext } from '../components/MovieContext';
import { useSQLiteContext } from 'expo-sqlite';

const t2Image = require('../assets/t2.jpg');
const titanicImage = require('../assets/titanic.jpg');

export default function App() {
    const db = useSQLiteContext();
    const { movie, setMovie } = useContext(MovieContext);
    const imageList = [t2Image, titanicImage];

    useEffect(() => {
          async function setup() {
            const result = await db.getFirstAsync('SELECT * FROM movies');
            console.log(result);
            setMovie(result);
          }
          setup();
    }, []);

    if( movie == null) {
        return (
            <Text>Loading</Text>
        )
    }
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
