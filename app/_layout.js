import { Slot } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../components/navbar';
import { useState, useEffect } from 'react';
import movieData from '../assets/movies.json';
import { MovieContext } from '../components/MovieContext'
import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';

export default function HomeLayout() {
  const [movie, setMovie] = useState(null);

  return (
    <View style={styles.container}>
        <SQLiteProvider databaseName="movies3.db" onInit={initializeDB}>
        <NavBar/>
        <MovieContext.Provider value={{movie, setMovie}}>
            <Slot />
        </MovieContext.Provider>
        </SQLiteProvider>
    </View>
    )
}

async function initializeDB(db) {
    await db.execAsync(`
        PRAGMA journal_mode = 'wal';
        CREATE TABLE IF NOT EXISTS movies (name TEXT PRIMARY KEY NOT NULL, year TEXT NOT NULL, actors TEXT NOT NULL, imageIndex INT NOT NULL);
    `);
     const result = await db.getAllAsync('SELECT * FROM movies');
    if( result.length == 0 ) {
        await db.runAsync('INSERT INTO movies (name, year, actors, imageIndex) VALUES (?, ?, ?, ?)', "Terminator 2", "1991", "Arnold, Linda, Edward", 0);
    }
    const firstRow = await db.getFirstAsync('SELECT * FROM movies');
    console.log(firstRow.name, firstRow.year, firstRow.actors, firstRow.imageIndex);
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        padding: 20,
    },
});



