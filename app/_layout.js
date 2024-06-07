import { Slot } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../components/navbar';
import { useState } from 'react';
import movieData from '../assets/movies.json';
import { MovieContext } from '../components/MovieContext'

export default function HomeLayout() {
  const [movie, setMovie] = useState(movieData);

  return (
    <View style={styles.container}>
        <NavBar/>
        <MovieContext.Provider value={{movie, setMovie}}>
            <Slot />
        </MovieContext.Provider>
    </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        padding: 20,
    },
});



